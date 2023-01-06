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
import { BehaviorSubject } from "rxjs";
import { VariableAst } from "@angular/compiler";

@Component({
  selector: "app-information-device",
  templateUrl: "./information-device.component.html",
  styleUrls: ["./information-device.component.css"],
})
export class InformationDeviceComponent implements OnInit {
  public devices: any;
  public devicesData: any;
  public stopSign;
  public timerReset: any;   //in second => 180s
  public baseTopic: any;

  public display: any;
  public deviceAction: any;

  private stopTimerSouce = new BehaviorSubject(true);
  currentStopSign = this.stopTimerSouce.asObservable();

  private timerResetSouce = new BehaviorSubject(true);
  currenttimerReset = this.timerResetSouce.asObservable();

  public ownerships: any;
  public listUIDShareRequest: any = [];

  constructor(
    private common: CommonServiceService,
    private cognito: CognitoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cognito.currentDevicesList.subscribe(
      (devicesList) => (this.devices = devicesList)
    );
    this.cognito.currentDevicesData.subscribe(
      (devicesData) => (this.devicesData = devicesData)
    );
    this.currentStopSign.subscribe((data) => (this.stopSign = data));
    this.currenttimerReset.subscribe((data) => (this.timerReset = data));
    this.cognito.currentBaseTopic.subscribe(
      (baseTopic) => (this.baseTopic = baseTopic)
    );
    this.deviceAction = this.devices;
  }

  openDialogControl(device: any): void {
    const virtualDevice = Object.assign({}, device);
    const backupDevice = Object.assign({}, device);
    // console.log("this.data.this.data.virtualDevice ", virtualDevice);
    // console.log("this.data.backupDevice ", backupDevice);
    const dialogRef = this.dialog.open(ControllerBoardComponent, {
      width: "430px",
      data: { virtualDevice, backupDevice }, // virtualDevice => store data of device after changed its properties,
      // backupDevice => store original data which is b4 data is changed
      // to compare which properties is changed after controlled
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }

  private handleDevice(device: any) {
    this.deviceAction = device;
  }

  private requestDeleteDevice() {
    var payload = {
      id: this.deviceAction.topic,
      block: false,
      force: false,
    };
    PubSub.publish(
      this.baseTopic + "zigbee2mqtt/bridge/request/device/remove",
      payload
    );
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

  public addingRequest(): void {
    this.stopTimerSouce.next(false);
    this.timer(3);
    var payload = {
      device: null,
      value: true,
      time: 180,
    };
    PubSub.publish(
      this.baseTopic + "zigbee2mqtt/bridge/request/permit_join",
      payload
    );
    PubSub.subscribe(this.baseTopic+"zigbee2mqtt/bridge/event").subscribe({
      next: (data) => {
        if (
          data.value.type == "device_interview" &&
          data.value.data.status == "successful"
        ) {
          this.stopTimer();
        }
      },
      error: (error) => console.error(error),
      complete: () => console.log("Done"),
    });
  }

  stopAddingProcess() {
    var payload = {
      device: null,
      value: false,
      time: 180,
    };
    PubSub.publish(
      this.baseTopic + "zigbee2mqtt/bridge/request/permit_join",
      payload
    ); //stop adding process
    // this.cognito.updateNewJoinedDEvice(data.value.data);
  }

  stopTimer() {
    this.stopTimerSouce.next(true);
  }

  timer(minute) {
    // let minute = 1;
    let seconds: number = minute * 60;

    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      if(seconds == 180) {
        this.timerResetSouce.next(true);
      }
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (this.stopSign == true) {
        this.timerResetSouce.next(false);
        this.stopAddingProcess();
        clearInterval(timer);
      }
      if (seconds == 0) {
        this.timerResetSouce.next(false);
        this.stopTimer();
        this.stopAddingProcess();
        clearInterval(timer);
      }

    }, 1000);
  }
}
