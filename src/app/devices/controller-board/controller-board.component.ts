import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { PubSub } from "aws-amplify";
import { BehaviorSubject } from "rxjs";
import { CommonServiceService } from "src/app/services/common-service.service";
var colorsys = require("colorsys");

@Component({
  selector: "app-controller-board",
  templateUrl: "./controller-board.component.html",
  styleUrls: ["./controller-board.component.css"],
})
export class ControllerBoardComponent implements OnInit {
  modeColorLight: any = "";

  constructor(
    public dialogRef: MatDialogRef<ControllerBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService
  ) {}

  ngOnInit() {
    if (this.data.virtualDevice.state == "ON") {
      this.data.virtualDevice.state = true;
    } else {
      this.data.virtualDevice.state = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onYesClick() {
    type color = {
      hex?: any;
    };
    type device = {
      state?: any;
      color?: { hex?: any };
      brightness?: any;
    };
    const changedProperties: device = {};
    console.log("1", this.data.virtualDevice.hex);
    console.log("1", changedProperties);

    if (this.data.virtualDevice.topic === "0x00124b00234c9228") {
      console.log("2", this.data.virtualDevice.hex);
      console.log("2", changedProperties);

      if (this.data.virtualDevice.state != this.data.backupDevice.state) {
        if (this.data.virtualDevice.state == true) {
          changedProperties.state = "ON";
        } else {
          changedProperties.state = "OFF";
        }
      }
      if (this.data.virtualDevice.hex != this.data.backupDevice.hex) {
        var txt = '{"hex":"' + this.data.virtualDevice.hex + '"}';
        changedProperties.color = JSON.parse(txt);
        console.log("22222", txt);
        console.log("22222", JSON.parse(txt));
        console.log("22222", changedProperties.color);

        if (
          this.data.virtualDevice.brightness !=
          this.data.backupDevice.brightness
        ) {
          changedProperties.brightness = this.data.virtualDevice.brightness;
        }
      }
    }
    
    PubSub.publish(
      "zigbee2mqtt/" + this.data.virtualDevice.topic + "/set",
      changedProperties
    );
  }

  formatLabel(value: number) {
    return value;
  }
}
