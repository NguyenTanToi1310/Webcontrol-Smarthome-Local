import { Component, Inject, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { BehaviorSubject } from "rxjs";
import { CognitoService } from "src/app/services/cognito.service";
import { PubSub } from "aws-amplify";

import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
@Component({
  selector: "app-edit-scene-board",
  templateUrl: "./edit-scene-board.component.html",
  styleUrls: ["./edit-scene-board.component.css"],
})
export class EditSceneBoardComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];

  // favoriteOption: string = "Mặc định";
  // options: string[] = ['Mặc định', 'Tuỳ Chỉnh'];
  public devices = new Array();
  public newSceneFormGroup = new FormGroup({
    nameFormControl: new FormControl(""),
  });
  public baseTopic: any;
  public checkIfSceneNameValid = true; //valid = no empty
  constructor(
    public dialogRef: MatDialogRef<EditSceneBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cognito: CognitoService,
    private readonly clientMqtt: CustomMqttService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // console.log("edit: ", this.data.virtualScene);

    this.cognito.currentBaseTopic.subscribe(
      (baseTopic) => (this.baseTopic = baseTopic)
    );

    this.cognito.currentDevicesList.subscribe((devicesList) => {

      // khởi tạo giá trị mặc định
      for (let [index, device] of devicesList.slice(1).entries()) {
        this.devices[index] = new Object();
        this.devices[index].friendly_name = device.friendly_name;
        this.devices[index].name = device.name;
        this.devices[index].model_id = device.model_id;
        this.devices[index].ieee_address = device.ieee_address;

        if (device.model_id == "WH_LEDRGB") {
          this.devices[index].state = false;
          this.devices[index].hex = "#ffffff";
          this.devices[index].brightness = 0;
        }
        if (device.model_id == "TS0505B") {
          this.devices[index].state = false;
          this.devices[index].hex = "#ffffff";
          this.devices[index].brightness = 0;
          this.devices[index].color_temp = 0;
        }
        if (device.model_id == "WH_LEDTEMP") {
          this.devices[index].state = false;
          this.devices[index].brightness = 0;
          this.devices[index].color_temp = 0;
        }
        if (device.model_id == "ZM-L03E-Z") {
          this.devices[index].state_left = false;
          this.devices[index].state_center = false;
          this.devices[index].state_right = false;
        }
        if (device.model_id == "WH_SWITCH4") {
          this.devices[index].state_l1 = false;
          this.devices[index].state_l2 = false;
          this.devices[index].state_l3 = false;
          this.devices[index].state_l4 = false;
        }
        // nếu device này có trong members của câu lệnh, thì gán data
        for (let member of this.data.virtualScene.members) {
          if (member.friendly_name == this.devices[index].friendly_name) {
            this.devices[index].checked = true;
            if (device.model_id == "WH_LEDRGB") {
              member.state == "ON"
                ? (this.devices[index].state = true)
                : (this.devices[index].state = false);
              this.devices[index].hex = member.hex;
              this.devices[index].brightness = member.brightness_scale_100;
            }
            if (device.model_id == "TS0505B") {
              member.state == "ON"
                ? (this.devices[index].state = true)
                : (this.devices[index].state = false);
              this.devices[index].hex = member.hex;
              this.devices[index].brightness = member.brightness_scale_100;
              this.devices[index].color_temp = member.color_temp;
            }
            if (device.model_id == "WH_LEDTEMP") {
              member.state == "ON"
                ? (this.devices[index].state = true)
                : (this.devices[index].state = false);
              this.devices[index].brightness = member.brightness_scale_100;
              this.devices[index].color_temp = member.color_temp;
            }
            if (device.model_id == "ZM-L03E-Z") {
              member.state_left == "ON"
                ? (this.devices[index].state_left = true)
                : (this.devices[index].state_left = false);
              member.state_center == "ON"
                ? (this.devices[index].state_center = true)
                : (this.devices[index].state_center = false);
              member.state_right == "ON"
                ? (this.devices[index].state_right = true)
                : (this.devices[index].state_right = false);
            }
            if (device.model_id == "WH_SWITCH4") {
              member.state_l1 == "ON"
                ? (this.devices[index].state_l1 = true)
                : (this.devices[index].state_l1 = false);
              member.state_l2 == "ON"
                ? (this.devices[index].state_l2 = true)
                : (this.devices[index].state_l2 = false);
              member.state_l3 == "ON"
                ? (this.devices[index].state_l3 = true)
                : (this.devices[index].state_l3 = false);
              member.state_l4 == "ON"
                ? (this.devices[index].state_l4 = true)
                : (this.devices[index].state_l4 = false);
            }
          }
        }
      }
      // console.log(this.devices)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onYesClick() {
    // console.log("sbcd: \n", this.devices);
    let members = new Array();
    let index = 0;
    for (let device of this.devices) {
      if (device.checked == true) {
        members[index] = new Object();
        members[index].friendly_name = device.friendly_name;
        members[index].name = device.name;
        members[index].model_id = device.model_id;
        members[index].ieee_address = device.ieee_address;

        if (device.model_id == "WH_LEDRGB") {
          let state = "";
          if (device.state == true) {
            state = "ON";
          } else {
            state = "OFF";
          }
          let brightness = (device.brightness * 2.54).toFixed(0);
          let rgb = this.cognito.hexToRgb(device.hex);
          let xy = this.cognito.rgb_to_cie(rgb.r, rgb.g, rgb.b);
          let txt = '{"x":' + xy[0] + ',"y":' + xy[1] + "}";
          let color = JSON.parse(txt);
          members[index].state = state;
          members[index].color = color;
          members[index].brightness = brightness;
          //console.log(members[index]);
        }
        if (device.model_id == "TS0505B") {
          let state = "";
          if (device.state == true) {
            state = "ON";
          } else {
            state = "OFF";
          }
          let brightness = (device.brightness * 2.54).toFixed(0);
          let rgb = this.cognito.hexToRgb(device.hex);
          let xy = this.cognito.rgb_to_cie(rgb.r, rgb.g, rgb.b);
          let txt = '{"x":' + xy[0] + ',"y":' + xy[1] + "}";
          let color = JSON.parse(txt);
          members[index].state = state;
          members[index].color = color;
          members[index].brightness = brightness;
          members[index].color_temp = device.color_temp;
          //console.log(members[index]);
        }
        if (device.model_id == "WH_LEDTEMP") {
          let state = "";
          if (device.state == true) {
            state = "ON";
          } else {
            state = "OFF";
          }
          let brightness = (device.brightness * 2.54).toFixed(0);
          members[index].state = state;
          members[index].brightness = brightness;
          members[index].color_temp = device.color_temp;
          //console.log(members[index]);
        }
        if (device.model_id == "ZM-L03E-Z") {
          let state_left = "";
          let state_center = "";
          let state_right = "";
          if (device.state_left == true) {
            state_left = "ON";
          } else {
            state_left = "OFF";
          }
          if (device.state_center == true) {
            state_center = "ON";
          } else {
            state_center = "OFF";
          }
          if (device.state_right == true) {
            state_right = "ON";
          } else {
            state_right = "OFF";
          }
          members[index].state_left = state_left;
          members[index].state_center = state_center;
          members[index].state_right = state_right;
          //console.log(members[index]);
        }
        if (device.model_id == "WH_SWITCH4") {
          let state_l1 = "";
          let state_l2 = "";
          let state_l3 = "";
          let state_l4 = "";
          if (device.state_l1 == true) {
            state_l1 = "ON";
          } else {
            state_l1 = "OFF";
          }
          if (device.state_l2 == true) {
            state_l2 = "ON";
          } else {
            state_l2 = "OFF";
          }
          if (device.state_l3 == true) {
            state_l3 = "ON";
          } else {
            state_l3 = "OFF";
          }
          if (device.state_l4 == true) {
            state_l4 = "ON";
          } else {
            state_l4 = "OFF";
          }
          members[index].state_l1 = state_l1;
          members[index].state_l2 = state_l2;
          members[index].state_l3 = state_l3;
          members[index].state_l4 = state_l4;
          //console.log(members[index]);;
        }
        index++;
      }
    }
    // this.dialogRef.close();
    let edited_scene = {
      name: this.newSceneFormGroup.value.nameFormControl,
      members: members,
    };
    // console.log("before \n", this.data.backupScene);
    // console.log("edited \n", edited_scene);

    let payload = {
      "from": this.data.backupScene,
      "to": edited_scene
    }
    if (edited_scene.name != "") {
      this.checkIfSceneNameValid = true;
      // PubSub.publish(
      //   this.baseTopic + "zigbee2mqtt/bridge/request/scene/edit",
      //   payload
      // );
      this.clientMqtt.publish("zigbee2mqtt/bridge/request/scene/edit", JSON.stringify(payload))
      this.dialogRef.close();
    } else {
      this.checkIfSceneNameValid = false;
    }
  }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
