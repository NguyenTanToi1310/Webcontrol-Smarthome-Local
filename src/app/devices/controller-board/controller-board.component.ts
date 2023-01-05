import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { PubSub } from "aws-amplify";
import { BehaviorSubject } from "rxjs";
import { CognitoService } from "src/app/services/cognito.service";
import { CommonServiceService } from "src/app/services/common-service.service";
var colorsys = require("colorsys");

@Component({
  selector: "app-controller-board",
  templateUrl: "./controller-board.component.html",
  styleUrls: ["./controller-board.component.css"],
})
export class ControllerBoardComponent implements OnInit {
  modeColorLight: any = "";
  public baseTopic: any;

  constructor(
    public dialogRef: MatDialogRef<ControllerBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService,
    private cognito: CognitoService,
  ) {}

  ngOnInit() {
    this.cognito.currentBaseTopic.subscribe(baseTopic => this.baseTopic = baseTopic);

    if (this.data.backupDevice.model_id == "WH_LEDRGB") {
      if (this.data.backupDevice.state == "ON") {
        this.data.virtualDevice.state = true;
        this.data.backupDevice.state = true;
      } else {
        this.data.virtualDevice.state = false;
        this.data.backupDevice.state = false;
      }
    }
    if (this.data.backupDevice.model_id == "WH_SWITCH4") {
      if (this.data.backupDevice.state_l1 == "ON") {
        this.data.virtualDevice.state_l1 = true;
        this.data.backupDevice.state_l1 = true;
      } else {
        this.data.virtualDevice.state_l1 = false;
        this.data.backupDevice.state_l1 = false;
      }
      if (this.data.backupDevice.state_l2 == "ON") {
        this.data.virtualDevice.state_l2 = true;
        this.data.backupDevice.state_l2 = true;
      } else {
        this.data.virtualDevice.state_l2 = false;
        this.data.backupDevice.state_l2 = false;
      }
      if (this.data.backupDevice.state_l3 == "ON") {
        this.data.virtualDevice.state_l3 = true;
        this.data.backupDevice.state_l3 = true;
      } else {
        this.data.virtualDevice.state_l3 = false;
        this.data.backupDevice.state_l3 = false;
      }
      if (this.data.backupDevice.state_l4 == "ON") {
        this.data.virtualDevice.state_l4 = true;
        this.data.backupDevice.state_l4 = true;
      } else {
        this.data.virtualDevice.state_l4 = false;
        this.data.backupDevice.state_l4 = false;
      }
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
      state_l1?: any;
      state_l2?: any;
      state_l3?: any;
      state_l4?: any;
    };
    const changedProperties: device = {};
    // console.log("1", this.data.virtualDevice.hex);
    // console.log("1", changedProperties);

    if (this.data.virtualDevice.model_id == "WH_LEDRGB") {
      // console.log("2", this.data.virtualDevice.hex);
      // console.log("2", changedProperties);

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
        // console.log("22222", txt);
        // console.log("22222", JSON.parse(txt));
        // console.log("22222", changedProperties.color);
      }
      if (
        this.data.virtualDevice.brightness != this.data.backupDevice.brightness
      ) {
        changedProperties.brightness = this.data.virtualDevice.brightness;
      }
    }

    if (this.data.virtualDevice.model_id == "WH_SWITCH4") {
      if (this.data.virtualDevice.state_l1 != this.data.backupDevice.state_l1) {
        if (this.data.virtualDevice.state_l1 == true) {
          changedProperties.state_l1 = "ON";
        } else {
          changedProperties.state_l1 = "OFF";
        }
      }
      if (this.data.virtualDevice.state_l2 != this.data.backupDevice.state_l2) {
        if (this.data.virtualDevice.state_l2 == true) {
          changedProperties.state_l2 = "ON";
        } else {
          changedProperties.state_l2 = "OFF";
        }
      }
      if (this.data.virtualDevice.state_l3 != this.data.backupDevice.state_l3) {
        if (this.data.virtualDevice.state_l3 == true) {
          changedProperties.state_l3 = "ON";
        } else {
          changedProperties.state_l3 = "OFF";
        }
      }
      if (this.data.virtualDevice.state_l4 != this.data.backupDevice.state_l4) {
        if (this.data.virtualDevice.state_l4 == true) {
          changedProperties.state_l4 = "ON";
        } else {
          changedProperties.state_l4 = "OFF";
        }
      }
    }

    PubSub.publish(
      this.baseTopic+"zigbee2mqtt/" + this.data.virtualDevice.topic + "/set",
      changedProperties
    );
  }

  formatLabel(value: number) {
    return value;
  }
}
