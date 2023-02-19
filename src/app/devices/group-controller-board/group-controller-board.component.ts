import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { PubSub } from "aws-amplify";
import { BehaviorSubject } from "rxjs";
import { CognitoService } from "src/app/services/cognito.service";

import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";

@Component({
  selector: 'app-group-controller-board',
  templateUrl: './group-controller-board.component.html',
  styleUrls: ['./group-controller-board.component.css']
})
export class GroupControllerBoardComponent implements OnInit {
  public baseTopic: any;
  public groupsData: any;
  mqttSubscriptions: Subscription[] = [];

  private deviceDataResponse: any = "";
  public result: any = {
    status: "waitting_for_input",
  };
  private myTimeout: any;

  constructor(
    public dialogRef: MatDialogRef<GroupControllerBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cognito: CognitoService,
    private readonly clientMqtt: CustomMqttService,
  ) {}

  ngOnInit(): void {
    this.cognito.currentBaseTopic.subscribe(
      (baseTopic) => (this.baseTopic = baseTopic)
    );

    this.cognito.currentGroupsData.subscribe(groupsData => {
      this.groupsData = groupsData;
      // console.log("groups data (group controller component):\n", this.groupsData);
      for(var groupData of this.groupsData){
        if(groupData.friendly_name == this.data.virtualGroup.friendly_name){
          // this.data.virtualGroup = groupData;
          if(!!groupData.state){
            if(groupData.state == "ON") {
              this.data.virtualGroup.state = true;
            } else {
              this.data.virtualGroup.state = false;
            }
          }
          console.log(!!groupData.color)
          if(!!groupData.color){
            let rgb = this.cognito.cie_to_rgb(groupData.color.x, groupData.color.y, 254);
            let hex = this.cognito.rgbToHex(rgb[0], rgb[1], rgb[2]);
            this.data.virtualGroup.hex = hex;
          }
          if(!!groupData.brightness){
            this.data.virtualGroup.brightness_scale100 = Number((groupData.brightness / 2.54).toFixed(0)); //scale to %
          }
          if(!!groupData.color_temp){
            this.data.virtualGroup.color_temp = groupData.color_temp;
          }
          break;
        }
      }
      console.log("virtual group data (group controller component):\n", this.data.virtualGroup);

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onYesClick() {
    this.result.status = "processing";
    type color = {
      hex?: any;
    };
    type properties = {
      state?: any;
      color?: { hex?: any };
      brightness?: any;
      color_temp?: any;
      state_l1?: any;
      state_l2?: any;
      state_l3?: any;
      state_l4?: any;
      // power_on_behavior?: any;
      // power_on_behavior_l1?: any;
      // power_on_behavior_l2?: any;
      // power_on_behavior_l3?: any;
      // power_on_behavior_l4?: any;
      // state_left?: any;
      // state_center?: any;
      // state_right?: any;
    };
    const changedProperties: properties = {};   
    
    if(this.data.virtualGroup.state == true){
      changedProperties.state = "ON";
    }else{
      changedProperties.state = "OFF";
    }

    if(!!this.data.virtualGroup.hex){
      // var txt = '{"hex":"' + this.data.virtualGroup.hex + '"}';
      let rgb = this.cognito.hexToRgb(this.data.virtualGroup.hex);
      let xy = this.cognito.rgb_to_cie(rgb.r, rgb.g, rgb.b);
      let txt = '{"x":' + xy[0] + ',"y":' + xy[1] + '}';
      changedProperties.color = JSON.parse(txt);
    }
    if(this.data.virtualGroup.brightness_scale100 != null){
      changedProperties.brightness = Number(
        (this.data.virtualGroup.brightness_scale100 * 2.54).toFixed(0)
      );
    }

    if(this.data.virtualGroup.color_temp != null){
      changedProperties.color_temp = this.data.virtualGroup.color_temp;
    }

    // PubSub.publish(
    //   this.baseTopic + "zigbee2mqtt/" + this.data.virtualGroup.friendly_name + "/set",
    //   changedProperties
    // );
    this.clientMqtt.publish("zigbee2mqtt/" + this.data.virtualGroup.friendly_name + "/set", JSON.stringify(changedProperties))

    
    // this.dialogRef.close();
    // console.log(changedProperties);
  }

  formatLabel(value: number) {
    return value;
  }

}
