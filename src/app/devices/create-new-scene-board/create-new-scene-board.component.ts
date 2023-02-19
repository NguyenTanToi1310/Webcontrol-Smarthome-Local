import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from "rxjs";
import { CognitoService } from 'src/app/services/cognito.service';
import { PubSub } from "aws-amplify";

import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
interface day {
  value: string;
  viewValue: string;
}
interface action {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-new-scene-board',
  templateUrl: './create-new-scene-board.component.html',
  styleUrls: ['./create-new-scene-board.component.css']
})
export class CreateNewSceneBoardComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];
  step = 0;
  selected_endpoint: string;
  endpoint_switch3: string[] = ["state_left", "state_center", "state_right"];

  public devices = new Array;
  public newSceneFormGroup = new FormGroup({
    nameFormControl : new FormControl(''),
  });
  public timePickerFormGroup = new FormGroup({
    timePickerFormControl: new FormControl(),
  });

  public baseTopic: any;
  public checkIfSceneNameValid = true; //valid = no empty
  public triggerDevice: any;

  days: day[] = [
    { value: "2", viewValue: "Thứ 2" },
    { value: "3", viewValue: "Thứ 3" },
    { value: "4", viewValue: "Thứ 4" },
    { value: "5", viewValue: "Thứ 5" },
    { value: "6", viewValue: "Thứ 6" },
    { value: "7", viewValue: "Thứ 7" },
    { value: "8", viewValue: "Chủ nhật" },
  ];
  actions: action[] = [
    { value: "long", viewValue: "long" },
    { value: "single", viewValue: "single" },
    { value: "double", viewValue: "double" },
  ];
  selected_days: any;

  type_trigger: any;

  constructor(
    public dialogRef: MatDialogRef<CreateNewSceneBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cognito: CognitoService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private readonly clientMqtt: CustomMqttService,
  ) { }
  
  ngOnInit(){ 
    this.cognito.currentBaseTopic.subscribe(
      (baseTopic) => (this.baseTopic = baseTopic)
    );

    this.cognito.currentDevicesList.subscribe((devicesList) => {
      // this.devices = devicesList;
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
        }
        if (device.model_id == "TS0003") {
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
      }
      // console.log(this.devices)
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  public next_step() {
    if (this.step == 0) {
      if (this.newSceneFormGroup.value.nameFormControl != "") {
        this.checkIfSceneNameValid = true;
      } else {
        this.checkIfSceneNameValid = false;
        return;
      }
    }
    if (this.step == 1 && this.type_trigger == "device") {
      for (let device of this.devices) {
        if (device.ieee_address == this.triggerDevice.ieee_address) {
          device.checked = true;
        }
      }
    }
    this.step++;
    // console.log(this.timePickerFormGroup.value.timePickerFormControl+":00")
    // console.log(this.selected_days)
    // console.log(this.type_trigger)
  }

  async onYesClick() {
    let members = new Array();
    let index = 0;
    for (let device of this.devices) {
      if (device.checked == true) {
        members[index] = new Object();
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
          members[index].state = new Object();
          members[index].state.state = state;
          members[index].state.color = color;
          members[index].state.brightness = brightness;
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
          members[index].state = new Object();
          members[index].state.state = state;
          members[index].state.color = color;
          members[index].state.brightness = brightness;
          members[index].state.color_temp = device.color_temp;
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
          members[index].state = new Object();
          members[index].state.state = state;
          members[index].state.brightness = brightness;
          members[index].state.color_temp = device.color_temp;

          //console.log(members[index]);
        }
        if (device.model_id == "TS0003") {
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
          members[index].state = new Object();
          members[index].state.state_left = state_left;
          members[index].state.state_center = state_center;
          members[index].state.state_right = state_right;
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
          members[index].state = new Object();
          members[index].state.state_l1 = state_l1;
          members[index].state.state_l2 = state_l2;
          members[index].state.state_l3 = state_l3;
          members[index].state.state_l4 = state_l4;
          //console.log(members[index]);;
        }
        if (device.model_id == "WB01") {
          members[index].state = new Object();
          members[index].state.action = device.action;
          //console.log(members[index]);
        }
        index++;
      }
    }

    var condition;
    if (this.type_trigger == "time") {
      var triggerTime = {
        time: this.timePickerFormGroup.value.timePickerFormControl + ":00",
        day: this.selected_days,
      };
      condition = {
        type: this.type_trigger,
        trigger: triggerTime,
      };
    }
    if (this.type_trigger == "device") {
      var triggerState;
      if (
        this.triggerDevice.model_id == "WH_LEDRGB" ||
        this.triggerDevice.model_id == "TS0505B" ||
        this.triggerDevice.model_id == "WH_LEDTEMP"
      ) {
        var state = "";
        if (this.triggerDevice.state == true) {
          state = "ON";
        } else {
          state = "OFF";
        }
        triggerState = {
          state: state,
        };
      }
      if (this.triggerDevice.model_id == "WB01") {
        var action = this.triggerDevice.action;
        triggerState = {
          action: action,
        };
      }
      if (this.triggerDevice.model_id == "TS0003") {
        let state_left = "";
        let state_center = "";
        let state_right = "";
        if (this.selected_endpoint == "state_left") {
          if (this.triggerDevice.state_left == true) {
            state_left = "ON";
          } else {
            state_left = "OFF";
          }
          triggerState = {
            state_left: state_left,
          };
        }
        if (this.selected_endpoint == "state_center") {
          if (this.triggerDevice.state_center == true) {
            state_center = "ON";
          } else {
            state_center = "OFF";
          }
          triggerState = {
            state_center: state_center,
          };
        }
        if (this.selected_endpoint == "state_right") {
          if (this.triggerDevice.state_right == true) {
            state_right = "ON";
          } else {
            state_right = "OFF";
          }
          triggerState = {
            state_right: state_right,
          };
        }
      }
      if (this.triggerDevice.model_id == "WH_SWITCH4") {
        let state_l1 = "";
        let state_l2 = "";
        let state_l3 = "";
        let state_l4 = "";
        if (this.selected_endpoint == "state_l1") {
          if (this.triggerDevice.state_l1 == true) {
            state_l1 = "ON";
          } else {
            state_l1 = "OFF";
          }
          triggerState = {
            state_l1: state_l1,
          };
        }
        if (this.selected_endpoint == "state_l2") {
          if (this.triggerDevice.state_l1 == true) {
            state_l2 = "ON";
          } else {
            state_l2 = "OFF";
          }
          triggerState = {
            state_l2: state_l2,
          };
        }
        if (this.selected_endpoint == "state_l3") {
          if (this.triggerDevice.state_l3 == true) {
            state_l3 = "ON";
          } else {
            state_l3 = "OFF";
          }
          triggerState = {
            state_l3: state_l3,
          };
        }
        if (this.selected_endpoint == "state_l4") {
          if (this.triggerDevice.state_l4 == true) {
            state_l4 = "ON";
          } else {
            state_l4 = "OFF";
          }
          triggerState = {
            state_l4: state_l4,
          };
        }
      }
      var triggerDevice = {
        model_id: this.triggerDevice.model_id,
        ieee_address: this.triggerDevice.ieee_address,
        state: triggerState,
      };
      condition = {
        type: this.type_trigger,
        trigger: triggerDevice,
      };
    }

    var scene = {
      name: this.newSceneFormGroup.value.nameFormControl,
      condition: condition,
      member: members,
    };
    // console.log(scene);
    // console.log("triggerDevice", this.triggerDevice);
    if(scene.name != "") {
      this.checkIfSceneNameValid = true;
      // PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/scene/add", scene);
      this.clientMqtt.publish("scene/add", JSON.stringify(scene))
      this.dialogRef.close();
    } else {
      this.checkIfSceneNameValid = false;
    }
  }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
