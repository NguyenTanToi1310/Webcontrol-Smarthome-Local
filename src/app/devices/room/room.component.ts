import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CommonServiceService } from "src/app/services/common-service.service";
import { ControllerBoardComponent } from "../controller-board/controller-board.component";
import { AutomationBoardComponent } from "../automation-board/automation-board.component";
import { CognitoService } from "src/app/services/cognito.service";
import { BoundText } from "@angular/compiler/src/render3/r3_ast";
import { PubSub } from "aws-amplify";
import { RenameGroupBoardComponent } from "../rename-group-board/rename-group-board.component";
import { NameNewGroupBoardComponent } from "../name-new-group-board/name-new-group-board.component";

import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
interface rooms {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"],
})
export class RoomComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];
  // public devices: any;
  public groups: any;

  public deviceAction: any;
  public groupAction: any;

  public ownerships: any;
  public listUIDShareRequest: any = [];
  public devicesData: any;

  public baseTopic: any;

  public roomsList;

  rooms: rooms[] = [
    { value: "living-room", viewValue: "Phòng khách" },
    { value: "kitchen-room", viewValue: "Phòng bếp" },
    { value: "bed-room", viewValue: "Phòng ngủ" },
  ];

  constructor(
    private common: CommonServiceService,
    public dialog: MatDialog,
    private cognito: CognitoService,
    private readonly clientMqtt: CustomMqttService,
  ) {}

  ngOnInit(): void {
    this.cognito.currentDevicesData.subscribe((devicesData) => {
      this.devicesData = devicesData;
      // console.log(devicesData)

      // for(var deviceData of this.devicesData){
      //   for(let i = 0; i<this.devices.length; i++){
      //     if(deviceData.topic == this.devices[i].friendly_name )
      //     {
      //       this.devices[i].linkquality = deviceData.linkquality;
      //     }
      //   }
      // }
    });
    this.cognito.currentRoomsList.subscribe(
      (roomsList) => (this.roomsList = roomsList)
    );

    this.cognito.currentGroups.subscribe((groups) => {
      this.groups = groups;
      for (var group of this.groups) {
        for (var member of group.members) {
          for (var device of this.devicesData) {
            if (device.ieee_address === member.ieee_address) {
              member.model_id = device.model_id;
            }
          }
        }
      }
    });

    this.cognito.currentBaseTopic.subscribe(
      (baseTopic) => (this.baseTopic = baseTopic)
    );
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

  private getDeviceAction(name: any) {
    for (let device of this.devicesData) {
      if (device.name == name) {
        this.deviceAction = device;
      }
    }
  }

  openDialogControl(): void {
    const virtualDevice = Object.assign({}, this.deviceAction);
    const backupDevice = Object.assign({}, this.deviceAction);
    const dialogRef = this.dialog.open(ControllerBoardComponent, {
      width: "430px",
      data: { virtualDevice, backupDevice },
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }

  openDialogAutomationBoard(): void {
    // const virtualDevice =  Object.assign({}, device)
    const dialogRef = this.dialog.open(AutomationBoardComponent, {
      width: "430px",
      // data: { virtualDevice }
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }

  private requestChangeRoom() {
    var payload = {
      "from": this.deviceAction.topic,
      "to": this.deviceAction.room + "/" + this.deviceAction.name,
      "homeassistant_rename": true,
    };
    console.log(payload);
    // PubSub.publish(
    //   this.baseTopic + "zigbee2mqtt/bridge/request/device/rename",
    //   payload
    // );
    this.clientMqtt.publish("zigbee2mqtt/bridge/request/device/rename", JSON.stringify(payload));

  }

  private addMemberToGroup() {
    var payload = {
      group: this.groupAction.friendly_name,
      device: "chua biet",
    };
    // PubSub.publish(
    //   this.baseTopic + "zigbee2mqtt/bridge/request/group/members/add",
    //   payload
    // );
    this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/members/add", JSON.stringify(payload));

  }

  private requestDeleteRoom() {
    var payload = {
      id: this.groupAction.friendly_name,
    };
    // PubSub.publish(
    //   this.baseTopic + "zigbee2mqtt/bridge/request/group/remove",
    //   payload
    // );
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
    const dialogRefEdit = this.dialog.open(NameNewGroupBoardComponent, {
      width: "430px",
    });
    dialogRefEdit.afterClosed().subscribe((result) => {});
  }
}
