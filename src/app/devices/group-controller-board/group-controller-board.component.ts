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
      var txt = '{"hex":"' + this.data.virtualGroup.hex + '"}';
      changedProperties.color = JSON.parse(txt);
    }
    if(this.data.virtualGroup.brightness != null){
      changedProperties.brightness = Number(
        (this.data.virtualGroup.brightness * 2.54).toFixed(0)
      );
    }

    // PubSub.publish(
    //   this.baseTopic + "zigbee2mqtt/" + this.data.virtualGroup.friendly_name + "/set",
    //   changedProperties
    // );
    this.clientMqtt.publish("zigbee2mqtt/" + this.data.virtualGroup.friendly_name + "/set", JSON.stringify(changedProperties))

    
    this.dialogRef.close();
    // console.log(changedProperties);
  }

  formatLabel(value: number) {
    return value;
  }

}
