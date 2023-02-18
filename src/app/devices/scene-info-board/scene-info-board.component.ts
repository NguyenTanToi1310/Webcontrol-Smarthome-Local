import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditSceneBoardComponent } from '../edit-scene-board/edit-scene-board.component';
import { CognitoService } from 'src/app/services/cognito.service';

import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
@Component({
  selector: 'app-scene-info-board',
  templateUrl: './scene-info-board.component.html',
  styleUrls: ['./scene-info-board.component.css']
})
export class SceneInfoBoardComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];
  public devices: any;

  constructor(
    public dialogRef: MatDialogRef<SceneInfoBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private readonly clientMqtt: CustomMqttService,
    private cognito: CognitoService,
    private _formBuilder: FormBuilder
  ) { }
  
  ngOnInit(){ 
    this.cognito.currentDevicesList.subscribe((devicesList) => {
      this.devices = devicesList;
      for(let member of this.data.virtualScene.member) {
        for(let device of this.devices) {
          if(device.ieee_address == this.data.virtualScene.condition.trigger.ieee_address) {
            this.data.virtualScene.condition.trigger.name = device.name
          }
          if(device.ieee_address == member.ieee_address)
          {
            member.name = device.name
          }
        }
      }
    });

    for (let member of this.data.virtualScene.member) {
      if (member.model_id == 'WH_LEDRGB' || member.model_id == 'TS0505B')
      {
        member.state.brightness_scale_100 = Number((member.state.brightness / 2.54).toFixed(0));
        let rgb = this.cognito.cie_to_rgb(member.state.color.x, member.state.color.y, 254);
        member.state.hex = this.cognito.rgbToHex(rgb[0], rgb[1], rgb[2]);
      }
      if (member.model_id == 'WH_LEDTEMP')
      {
        member.state.brightness_scale_100 = Number((member.state.brightness / 2.54).toFixed(0));
      }
    }
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  async onYesClick() {
    this.dialogRef.close();
  }


  formatLabel(value: number) {
    return value;
  }

  requestDeleteDevice(): void {
    // PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/scene/remove", {"name": this.data.virtualScene.name});
    this.clientMqtt.publish("scene/remove", JSON.stringify({"name": this.data.virtualScene.name}))

  }

  openDialogEditScene(): void {
    const virtualScene = Object.assign({}, this.data.virtualScene);
    const backupScene = Object.assign({}, this.data.virtualScene);
    const dialogRef = this.dialog.open(EditSceneBoardComponent, {
      autoFocus: false,
      width: "430px",
      data: { virtualScene, backupScene },
    });
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }
}
