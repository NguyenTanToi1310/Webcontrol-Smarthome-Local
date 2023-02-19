import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { BehaviorSubject } from "rxjs";

import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";

import { CognitoService } from "src/app/services/cognito.service";
var colorsys = require("colorsys");

interface power_on_behavior {
  value: string;
  viewValue: string;
}
interface action {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-controller-board",
  templateUrl: "./controller-board.component.html",
  styleUrls: ["./controller-board.component.css"],
})
export class ControllerBoardComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];
  modeColorLight: any = "";
  public baseTopic: any;

  private deviceDataResponse: any = "";
  public result: any = {
    status: "waitting_for_input",
  };
  private myTimeout: any;

  power_on_behaviors: power_on_behavior[] = [
    {value: 'on', viewValue: 'Bật'},
    {value: 'off', viewValue: 'Tắt'},
    {value: 'previous', viewValue: 'Khôi phục'},
  ];
  actions: action[] = [
    {value: 'long', viewValue: 'long'},
    {value: 'single', viewValue: 'single'},
    {value: 'double', viewValue: 'double'},
  ]

  constructor(
    public dialogRef: MatDialogRef<ControllerBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cognito: CognitoService,
    private readonly clientMqtt: CustomMqttService,
  ) {}

  ngOnInit() {
    this.cognito.currentBaseTopic.subscribe(
      (baseTopic) => (this.baseTopic = baseTopic)
    );

    if (this.data.backupDevice.model_id == "WH_LEDRGB" || this.data.backupDevice.model_id == "WH_LEDTEMP" || this.data.backupDevice.model_id == 'TS0505B') {
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
    if (this.data.backupDevice.model_id == "TS0003") {
      if (this.data.backupDevice.state_left == "ON") {
        this.data.virtualDevice.state_left = true;
        this.data.backupDevice.state_left = true;
      } else {
        this.data.virtualDevice.state_left = false;
        this.data.backupDevice.state_left = false;
      }
      if (this.data.backupDevice.state_center == "ON") {
        this.data.virtualDevice.state_center = true;
        this.data.backupDevice.state_center = true;
      } else {
        this.data.virtualDevice.state_center = false;
        this.data.backupDevice.state_center = false;
      }
      if (this.data.backupDevice.state_right == "ON") {
        this.data.virtualDevice.state_right = true;
        this.data.backupDevice.state_right = true;
      } else {
        this.data.virtualDevice.state_right = false;
        this.data.backupDevice.state_right = false;
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onYesClick() {
    this.result.status = "processing";
    type color = {
      hex?: any;
    };
    type device = {
      state?: any;
      power_on_behavior?: any;
      color?: { hex?: any };
      brightness?: any;
      color_temp?: any;
      state_l1?: any;
      state_l2?: any;
      state_l3?: any;
      state_l4?: any;
      power_on_behavior_l1?: any;
      power_on_behavior_l2?: any;
      power_on_behavior_l3?: any;
      power_on_behavior_l4?: any;
      state_left?: any;
      state_center?: any;
      state_right?: any;
      action?: any;
    };
    const changedProperties: device = {};

    if(this.data.virtualDevice.state != this.data.backupDevice.state){
      if(this.data.virtualDevice.state == true){
        changedProperties.state = "ON";
      }else{
        changedProperties.state = "OFF";
      }
    }

    if (this.data.virtualDevice.model_id == "WB01") {
      if(this.data.virtualDevice.action != this.data.backupDevice.action){
        changedProperties.action = this.data.virtualDevice.action;
      }
    }

    if (this.data.virtualDevice.model_id == "WH_LEDRGB" || this.data.virtualDevice.model_id == "WH_LEDTEMP" || this.data.backupDevice.model_id == 'TS0505B') {
      if (this.data.virtualDevice.power_on_behavior != this.data.backupDevice.power_on_behavior) {
        changedProperties.power_on_behavior = this.data.virtualDevice.power_on_behavior;
      }
      if (this.data.virtualDevice.brightness != this.data.backupDevice.brightness) {
        changedProperties.brightness = Number(
          (this.data.virtualDevice.brightness * 2.54).toFixed(0)
        );
      }
    }

    if (this.data.virtualDevice.model_id == "WH_LEDRGB" || this.data.backupDevice.model_id == 'TS0505B') {
      if (this.data.virtualDevice.hex != this.data.backupDevice.hex) {
        // var txt = '{"hex":"' + this.data.virtualDevice.hex + '"}';
        let rgb = this.cognito.hexToRgb(this.data.virtualDevice.hex);
        let xy = this.cognito.rgb_to_cie(rgb.r, rgb.g, rgb.b);
        let txt = '{"x":' + xy[0] + ',"y":' + xy[1] + '}';
        changedProperties.color = JSON.parse(txt);
      }
    }

    if (this.data.virtualDevice.model_id == "WH_LEDTEMP" || this.data.backupDevice.model_id == 'TS0505B') {
      if (this.data.virtualDevice.color_temp != this.data.backupDevice.color_temp) { 
        changedProperties.color_temp = this.data.virtualDevice.color_temp;
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
      if(this.data.virtualDevice.power_on_behavior_l1 != this.data.backupDevice.power_on_behavior_l1){
        changedProperties.power_on_behavior_l1 = this.data.virtualDevice.power_on_behavior_l1;
      }
      if(this.data.virtualDevice.power_on_behavior_l2 != this.data.backupDevice.power_on_behavior_l2){
        changedProperties.power_on_behavior_l2 = this.data.virtualDevice.power_on_behavior_l2;
      }
      if(this.data.virtualDevice.power_on_behavior_l3 != this.data.backupDevice.power_on_behavior_l3){
        changedProperties.power_on_behavior_l3 = this.data.virtualDevice.power_on_behavior_l3;
      }
      if(this.data.virtualDevice.power_on_behavior_l4 != this.data.backupDevice.power_on_behavior_l4){
        changedProperties.power_on_behavior_l4 = this.data.virtualDevice.power_on_behavior_l4;
      }
    }

    if (this.data.virtualDevice.model_id == "TS0003") {
      if (this.data.virtualDevice.state_left != this.data.backupDevice.state_left) {
        if (this.data.virtualDevice.state_left == true) {
          changedProperties.state_left = "ON";
        } else {
          changedProperties.state_left = "OFF";
        }
      }
      if (this.data.virtualDevice.state_center != this.data.backupDevice.state_center) {
        if (this.data.virtualDevice.state_center == true) {
          changedProperties.state_center = "ON";
        } else {
          changedProperties.state_center = "OFF";
        }
      }
      if (this.data.virtualDevice.state_right != this.data.backupDevice.state_right) {
        if (this.data.virtualDevice.state_right == true) {
          changedProperties.state_right = "ON";
        } else {
          changedProperties.state_right = "OFF";
        }
      }
    }

    //no change at all, close dialog and stop this func
    if (Object.keys(changedProperties).length == 0) {
      this.dialogRef.close();
      return;
    }

    //subcribe to wait for responding, if nothing is responded, fail
    // const tempSub = PubSub.subscribe(
    //   this.baseTopic + "zigbee2mqtt/" + this.data.virtualDevice.topic
    // ).subscribe({
    //   next: (data) => {
    //     this.deviceDataResponse = data.value;
    //     this.result.status = true;
    //     clearTimeout(this.myTimeout);
    //     this.dialogRef.close();
    //     tempSub.unsubscribe();
    //   },
    //   error: (error) => console.error(error),
    //   complete: () => console.log("Done"),
    // });

    this.mqttSubscriptions[0] = this.clientMqtt.topic("zigbee2mqtt/" + this.data.virtualDevice.topic).subscribe((message: IMqttMessage) => {
      let messageJSON = JSON.parse(message.payload.toString())
      console.log("message: " + messageJSON.text);
      this.deviceDataResponse = messageJSON;
      this.result.status = true;
      clearTimeout(this.myTimeout);
      this.dialogRef.close();
      // tempSub.unsubscribe();         ???????????????????
    });

    // console.log("bat dau timer\n");
    this.myTimeout = setTimeout(() => {
      // console.log("time outtttt!\n");
      if (this.deviceDataResponse == "") {
        this.result.status = false;
        console.log("nothing");
        console.log("time outtttt!\n");
      }
      // tempSub.unsubscribe();           ??????????????????
    }, 10000);

    // PubSub.publish(
    //   this.baseTopic + "zigbee2mqtt/" + this.data.virtualDevice.topic + "/set",
    //   changedProperties
    // );
    console.log("pub ne")
    this.clientMqtt.publish("zigbee2mqtt/" + this.data.virtualDevice.topic + "/set", JSON.stringify(changedProperties))
  }

  myGreeting() {
    console.log("time outtttt!\n");
  }

  formatLabel(value: number) {
    return value;
  }
}
