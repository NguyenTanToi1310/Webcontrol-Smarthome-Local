import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ControllerBoardComponent } from "../controller-board/controller-board.component";
import { GroupControllerBoardComponent } from "../group-controller-board/group-controller-board.component";
import { CognitoService } from "src/app/services/cognito.service";
import { BoundText } from "@angular/compiler/src/render3/r3_ast";
import { PubSub } from "aws-amplify";
import { RenameGroupBoardComponent } from "../rename-group-board/rename-group-board.component";
import { CreateNewGroupBoardComponent } from "../create-new-group-board/create-new-group-board.component";
import { CreateNewSceneBoardComponent } from "../create-new-scene-board/create-new-scene-board.component";
import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
@Component({
  selector: "app-shortcut",
  templateUrl: "./shortcut.component.html",
  styleUrls: ["./shortcut.component.css"],
})
export class ShortcutComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];
  public devices: any;
  public groups: any;
  public scenes: any;

  public deviceAction: any;
  public groupAction: any;
  public delInAllGroup = false;
  public selectedDevices: any; // a copied of this.devices ,
  // and 1 more property showing if this device is member of this group,
  // and 1 more proerty showing if it is selected to add into a group

  public ownerships: any;
  public listUIDShareRequest: any = [];
  public devicesData: any;

  public baseTopic: any;

  constructor(
    public dialog: MatDialog,
    private cognito: CognitoService,
    private readonly clientMqtt: CustomMqttService,
  ) {}

  ngOnInit(): void {
    this.cognito.currentDevicesData.subscribe(
      (devicesData) => {
        this.devicesData = devicesData
        this.selectedDevices = this.devicesData;
        for (var device of this.devicesData) {
          for (var group of this.groups) {
            for (var member of group.members) {
                if (device.ieee_address === member.ieee_address) {
                  member.model_id = device.model_id;
                if(member.model_id == "TS0505B") {
                  group.isColorTemperatureLightExist = true;
                }
                if(member.model_id == "WH_LEDRGB") {
                  group.isColorNoneTemperatureLightExist = true;
                }
                // đèn trắng
                if(member.model_id == "WH_LEDTEMP") {
                  group.isTemperatureLightExist = true;
                }
                if(member.model_id == "WH_SWITCH4" || member.model_id == "TS0003") {
                  group.isSwitchExist = true;
                }
                if(member.model_id == "WH_SENSOR" || member.model_id == "TS0203") {
                  group.isSensorExist = true;
                }
                member.name = device.name;
                member.friendly_name = device.topic;
              }
            }
          }
        }
      }
    );
    
    this.cognito.currentGroups.subscribe((groups) => {
      this.groups = groups;
      for (var group of this.groups) {
        for (var member of group.members) {
          for (var device of this.devicesData) {
            if (device.ieee_address === member.ieee_address) {
              member.model_id = device.model_id;
              if(member.model_id == "TS0505B") {
                group.isColorTemperatureLightExist = true;
              }
              if(member.model_id == "WH_LEDRGB") {
                group.isColorNoneTemperatureLightExist = true;
              }
              // đèn trắng
              if(member.model_id == "WH_LEDTEMP") {
                group.isTemperatureLightExist = true;
              }
              if(member.model_id == "WH_SWITCH4" || member.model_id == "TS0003") {
                group.isSwitchExist = true;
              }
              if(member.model_id == "WH_SENSOR" || member.model_id == "TS0203") {
                group.isSensorExist = true;
              }
              member.name = device.name;
              member.friendly_name = device.topic;
            }
          }
        }
      }
    });

    this.cognito.currentScenes.subscribe((scenes) => {
      this.scenes = scenes;
    });

    this.cognito.currentBaseTopic.subscribe(baseTopic => this.baseTopic = baseTopic);

    this.selectedDevices = this.devicesData;
  }

  // this func recieve index of clicked BoundText, then get data of the device in this box
  private getBoxIndex(groupIndex: any, boxIndex: any) {
    for (let deviceData of this.devicesData) {
      if (
        deviceData.ieee_address ==
        this.groups[groupIndex].members[boxIndex].ieee_address
      ) {
        this.deviceAction = deviceData;
        this.groupAction = this.groups[groupIndex];
        // console.log(deviceData);
        // console.log(this.groups);
        // console.log(this.groups[groupIndex]);
        // console.log(this.groups[groupIndex].members);
        // console.log(this.groups[groupIndex].members[boxIndex]);
      }
    }
  }
  private getRowIndex(groupIndex: any) {
    this.groupAction = this.groups[groupIndex];
  }

  openDialogControl(): void {
    const virtualDevice = Object.assign({}, this.deviceAction);
    const backupDevice = Object.assign({}, this.deviceAction);
    const dialogRef = this.dialog.open(ControllerBoardComponent, {
      autoFocus: false,
      width: "430px",
      data: { virtualDevice, backupDevice },
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }

  openDialogGroupControl(): void {
    const virtualGroup = Object.assign({}, this.groupAction);
    const dialogRef = this.dialog.open(GroupControllerBoardComponent, {
      autoFocus: false,
      width: "430px",
      data: { virtualGroup },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialogCreateNewScene(): void {
    const dialogRef = this.dialog.open(CreateNewSceneBoardComponent, {
      autoFocus: false,
      width: "430px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }

  private requestDeleteDevice() {
    var payload1 = {
      group: this.groupAction.friendly_name,
      device: this.deviceAction.topic,
    };
    // PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/members/remove", payload1);
    this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/remove", JSON.stringify(payload1));


    if (this.delInAllGroup == true) {
      var payload2 = {
        device: this.deviceAction.topic,
      };
      // PubSub.publish(
      //   this.baseTopic+"zigbee2mqtt/bridge/request/group/members/remove_all",
      //   payload2
      // );
      this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/remove_all", JSON.stringify(payload2));

      this.delInAllGroup = false;
    }
  }
  private cancelRequestDeleteDevice() {
    this.delInAllGroup = false; //restore checkbox to "false" value, no matter what users do
  }

  private cancelRequestChooseDevice() {
    for (let device of this.selectedDevices) {
      //restore checkbox to "false" value, no matter what users do
      device.checked = false;
    }
  }

  private addMemberToGroup() {
    var payload = {
      group: this.groupAction.friendly_name,
      device: "chua biet",
    };
    // PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/members/add", payload);
    this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));

  }

  private requestDeleteGroup() {
    var payload = {
      id: this.groupAction.friendly_name,
    };
    // PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/remove", payload);
    this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/remove", JSON.stringify(payload));
  }

  openDialogRename(): void {
    const virtualGroup = Object.assign({}, this.groupAction);

    const dialogRefEdit = this.dialog.open(RenameGroupBoardComponent, {
      width: "430px",
      data: { virtualGroup },
    });
    dialogRefEdit.afterClosed().subscribe((result) => {});
  }

  openDialogNameNewGroup(): void {
    const dialogRefEdit = this.dialog.open(CreateNewGroupBoardComponent, {
      width: "430px",
    });
    dialogRefEdit.afterClosed().subscribe((result) => {});
  }

  getOtherDevicesRemaining(): void {
    for (let device of this.selectedDevices) {
      device.checked = false;
      device.added = false; //this varibale shows if this device added into this group
      for (let group of this.groups) {
        if (group.friendly_name == this.groupAction.friendly_name) {
          for (let member of group.members) {
            if (member.ieee_address == device.ieee_address) {
              device.added = true;
            }
          }
          break;
        }
      }
    }
  }

  submitSelectedDevices(): void {
    for (let device of this.selectedDevices) {
      if (device.model_id != "WH_SWITCH4" && device.model_id != "TS0003" && device.checked == true) {
        let payload = {
          group: this.groupAction.friendly_name,
          device: device.topic,
        };
        this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
        device.checked = false;
      }
      if (device.model_id == "WH_SWITCH4") {
        if(device.checked_endpoint1 == true) {
          let payload = {
            group: this.groupAction.friendly_name,
            device: device.topic + "/1",
          };
          this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
          device.checked_endpoint1 = false;
        }
        if(device.checked_endpoint2 == true) {
          let payload = {
            group: this.groupAction.friendly_name,
            device: device.topic + "/2",
          };
          this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
          device.checked_endpoint2 = false;
        }
        if(device.checked_endpoint3 == true) {
          let payload = {
            group: this.groupAction.friendly_name,
            device: device.topic + "/3",
          };
          this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
          device.checked_endpoint3 = false;
        }
        if(device.checked_endpoint4 == true) {
          let payload = {
            group: this.groupAction.friendly_name,
            device: device.topic + "/4",
          };
          this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
          device.checked_endpoint4 = false;
        }
      }
      if (device.model_id == "TS0003") {
        if(device.checked_endpoint1 == true) {
          let payload = {
            group: this.groupAction.friendly_name,
            device: device.topic + "/1",
          };
          this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
          device.checked_endpoint1 = false;
        }
        if(device.checked_endpoint2 == true) {
          let payload = {
            group: this.groupAction.friendly_name,
            device: device.topic + "/2",
          };
          this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
          device.checked_endpoint2 = false;
        }
        if(device.checked_endpoint3 == true) {
          let payload = {
            group: this.groupAction.friendly_name,
            device: device.topic + "/3",
          };
          this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));
          device.checked_endpoint3 = false;
        }
      }
    }
  }

  runScene(scene: any): void {
    PubSub.publish(this.baseTopic+"scene/call", {"name": scene.name});
  }
}
