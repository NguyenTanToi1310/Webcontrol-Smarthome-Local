import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/services/common-service.service';

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
  modeColorLight : any = ""
  favoriteSeason: string = "Mặc định";
  seasons: string[] = ['Mặc định', 'Tuỳ Chỉnh'];

  isChecked = true;
  formGroup = this._formBuilder.group({
    whiteLight: '',
    colorLight: '',
    switch1: '',
    switch2: '',
    switch3: '',
  });

  constructor(
    public dialogRef: MatDialogRef<SceneInfoBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService,
    public dialog: MatDialog,
    private readonly clientMqtt: CustomMqttService,
    private _formBuilder: FormBuilder
  ) { }
  
  ngOnInit(){ 
    if(this.data.virtualDevice.type === "fan") {
      this.data.virtualDevice.fanspeed = "S2"
    } else if (this.data.virtualDevice.type === "color-light") {
      if (this.data.virtualDevice.burning) {
        this.modeColorLight = "burning"
      } else if (this.data.virtualDevice.sleep) {
        this.modeColorLight = "sleep"
      } else if (this.data.virtualDevice.rainbow) {
        this.modeColorLight = "rainbow"
      } else if (this.data.virtualDevice.party) {
        this.modeColorLight = "party"
      } else {
        this.modeColorLight = "none"  // khong co mode nao duoc chon se chon mode none
      }
    }
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  setModeColorLight(mode : string){
    switch (mode) {
      case 'sleep':
        this.modeColorLight = "sleep"
        break
      case 'burning':
        this.modeColorLight = "burning"
        break
      case 'rainbow':
        this.modeColorLight = "rainbow"
        break
      case 'party':
        this.modeColorLight = "party"
        break
      default:
        this.modeColorLight = "none"  // khong co mode nao duoc chon se sáng màu được chọn
    }
  }

  async onYesClick() {
    if (this.data.virtualDevice.type === "color-light") {
      if (this.modeColorLight === "burning") {
        this.data.virtualDevice.burning = true
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = false
      } else if (this.modeColorLight === "sleep") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = true
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = false
      } else if (this.modeColorLight === "rainbow") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = true
        this.data.virtualDevice.party = false
      } else if (this.modeColorLight === "party") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = true
      } else if (this.modeColorLight === "none") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = false
      }
    }
  }

  formatLabel(value: number) {
    return value;
  }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}