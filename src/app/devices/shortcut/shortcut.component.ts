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

@Component({
  selector: "app-shortcut",
  templateUrl: "./shortcut.component.html",
  styleUrls: ["./shortcut.component.css"],
})
export class ShortcutComponent implements OnInit {
  public devices: any;
  public groups: any;

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
    private common: CommonServiceService,
    public dialog: MatDialog,
    private cognito: CognitoService
  ) {}

  ngOnInit(): void {
    this.cognito.currentDevicesData.subscribe(
      (devicesData) => (this.devicesData = devicesData)
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

  private requestDeleteDevice() {
    var payload1 = {
      group: this.groupAction.friendly_name,
      device: this.deviceAction.topic,
    };
    PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/members/remove", payload1);

    if (this.delInAllGroup == true) {
      var payload2 = {
        device: this.deviceAction.topic,
      };
      PubSub.publish(
        this.baseTopic+"zigbee2mqtt/bridge/request/group/members/remove_all",
        payload2
      );
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
    PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/members/add", payload);
  }

  private requestDeleteRoom() {
    var payload = {
      id: this.groupAction.friendly_name,
    };
    PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/remove", payload);
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
      if (device.checked == true) {
        var payload = {
          group: this.groupAction.friendly_name,
          device: device.topic,
        };
        PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/members/add", payload);
        device.checked = false;
      }
    }
  }
}
