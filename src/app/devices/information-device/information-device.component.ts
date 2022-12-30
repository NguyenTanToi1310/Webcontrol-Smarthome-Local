import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CommonServiceService } from "src/app/services/common-service.service";
import { ControllerBoardComponent } from "../controller-board/controller-board.component";

import { ShareBoardComponent } from "../share-board/share-board.component";
import { EditBoardComponent } from "../edit-board/edit-board.component";

import { CognitoService } from "src/app/services/cognito.service";
import { PubSub } from "aws-amplify";

@Component({
  selector: "app-information-device",
  templateUrl: "./information-device.component.html",
  styleUrls: ["./information-device.component.css"],
})
export class InformationDeviceComponent implements OnInit {
  public devices: any;
  public devicesData: any;


  public ownerships: any;
  public deviceAction: any;
  public listUIDShareRequest: any = [];

  constructor(
    private common: CommonServiceService,
    private cognito: CognitoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cognito.currentDevicesList.subscribe(devicesList => this.devices = devicesList);

    this.cognito.currentDevicesData.subscribe(devicesData => this.devicesData = devicesData);


    this.common.ownership.subscribe((res) => {
      this.ownerships = res;
    });

    this.deviceAction = this.devices;
    this.common.getShareHistories();
  }

  openDialogControl(device: any): void {
    const virtualDevice = Object.assign({}, device);
    const dialogRef = this.dialog.open(ControllerBoardComponent, {
      width: "430px",
      data: { virtualDevice },
    });
    dialogRef.afterClosed().subscribe(result => { /* anything */ })
  }

  private handleDevice(device: any) {
    this.deviceAction = device;
  }

  private requestDeleteDevice() {
    var payload = {
      "id": this.deviceAction.topic,
      "block": false,
      "force": false
    };
    PubSub.publish("zigbee2mqtt/bridge/request/device/remove", payload);
  }

  openDialogShareEdit(device: any, cmd: string): void {
    const virtualDevice = Object.assign({}, device);
    switch (cmd) {
      case "share":
        const dialogRefShare = this.dialog.open(ShareBoardComponent, {
          width: "430px",
          data: { virtualDevice },
        });
        dialogRefShare.afterClosed().subscribe((result) => {});
        break;
      case "edit":
        const dialogRefEdit = this.dialog.open(EditBoardComponent, {
          width: "430px",
          data: { virtualDevice },
        });
        dialogRefEdit.afterClosed().subscribe((result) => {});
        break;
      default:
    }
  }

  public async replyDemand(deviceId: string, command: string, index: any) {
    if (command === "accept") {
      await this.common.acceptShareDeviceDemand(deviceId);
    } else if (command === "refuse") {
      await this.common.refuseShareDeviceDemand(
        deviceId,
        this.listUIDShareRequest[index]
      );
    }
  }
}
