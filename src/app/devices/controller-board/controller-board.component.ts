import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { PubSub } from "aws-amplify";
import { CommonServiceService } from "src/app/services/common-service.service";
const ColorConverter = require("cie-rgb-color-converter");

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
    if (this.data.virtualDevice.type === "fan") {
      this.data.virtualDevice.fanspeed = "S2";
    } else if (this.data.virtualDevice.type === "color-light") {
      if (this.data.virtualDevice.burning) {
        this.modeColorLight = "burning";
      } else if (this.data.virtualDevice.sleep) {
        this.modeColorLight = "sleep";
      } else if (this.data.virtualDevice.rainbow) {
        this.modeColorLight = "rainbow";
      } else if (this.data.virtualDevice.party) {
        this.modeColorLight = "party";
      } else {
        this.modeColorLight = "none"; // khong co mode nao duoc chon se chon mode none
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setModeColorLight(mode: string) {
    switch (mode) {
      case "sleep":
        this.modeColorLight = "sleep";
        break;
      case "burning":
        this.modeColorLight = "burning";
        break;
      case "rainbow":
        this.modeColorLight = "rainbow";
        break;
      case "party":
        this.modeColorLight = "party";
        break;
      default:
        this.modeColorLight = "none"; // khong co mode nao duoc chon se sáng màu được chọn
    }
  }

  async onYesClick() {
    if (this.data.virtualDevice.type === "color-light") {
      if (this.modeColorLight === "burning") {
        this.data.virtualDevice.burning = true;
        this.data.virtualDevice.sleep = false;
        this.data.virtualDevice.rainbow = false;
        this.data.virtualDevice.party = false;
      } else if (this.modeColorLight === "sleep") {
        this.data.virtualDevice.burning = false;
        this.data.virtualDevice.sleep = true;
        this.data.virtualDevice.rainbow = false;
        this.data.virtualDevice.party = false;
      } else if (this.modeColorLight === "rainbow") {
        this.data.virtualDevice.burning = false;
        this.data.virtualDevice.sleep = false;
        this.data.virtualDevice.rainbow = true;
        this.data.virtualDevice.party = false;
      } else if (this.modeColorLight === "party") {
        this.data.virtualDevice.burning = false;
        this.data.virtualDevice.sleep = false;
        this.data.virtualDevice.rainbow = false;
        this.data.virtualDevice.party = true;
      } else if (this.modeColorLight === "none") {
        this.data.virtualDevice.burning = false;
        this.data.virtualDevice.sleep = false;
        this.data.virtualDevice.rainbow = false;
        this.data.virtualDevice.party = false;
      }

      // // convert hex code to RGB
      // const hexToRgb = (hex) =>
      //   hex
      //     .replace(
      //       /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      //       (m, r, g, b) => "#" + r + r + g + g + b + b
      //     )
      //     .substring(1)
      //     .match(/.{2}/g)
      //     .map((x) => parseInt(x, 16));
      // let RGB = hexToRgb(this.data.virtualDevice.hex);
      // this.data.virtualDevice.RGBColor.r = RGB[0];
      // this.data.virtualDevice.RGBColor.g = RGB[1];
      // this.data.virtualDevice.RGBColor.b = RGB[2];
  
      // // convert RGB to xy color space
      // let xy = ColorConverter.rgbToXy(
      //   this.data.virtualDevice.RGBColor.r,
      //   this.data.virtualDevice.RGBColor.g,
      //   this.data.virtualDevice.RGBColor.b
      // );
      // this.data.virtualDevice.color.x = xy.x;
      // this.data.virtualDevice.color.y = xy.y;
    }
    // await this.common.controlDevice(this.data.virtualDevice);
    PubSub.publish(
      "zigbee2mqtt/" + this.data.virtualDevice.topic + "/set",
      this.data.virtualDevice
    );
  }

  formatLabel(value: number) {
    return value;
  }
}
