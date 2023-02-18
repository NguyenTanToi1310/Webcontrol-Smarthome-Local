import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PubSub } from 'aws-amplify';
import { CognitoService } from 'src/app/services/cognito.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { CustomMqttService } from '../../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
interface rooms {
  value: string;
  viewValue: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];

  matcher = new MyErrorStateMatcher();
  public baseTopic: any;
  rooms: rooms[] = [
    { value: "living-room", viewValue: "Phòng khách" },
    { value: "kitchen-room", viewValue: "Phòng bếp" },
    { value: "bed-room", viewValue: "Phòng ngủ" },
  ];

  public editDeviceFormGroup = new FormGroup({
    switchTypeFormControl : new FormControl(''),
    PINFormControl : new FormControl(''),
    nameFormControl : new FormControl(''),
  });


  public result : any = {
    status : 'waitting_for_input'
  }

  constructor(
    public dialogRef: MatDialogRef<EditBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService,
    private cognito: CognitoService,    
    private readonly clientMqtt: CustomMqttService,
  ) { }

  ngOnInit(): void {
    this.cognito.currentBaseTopic.subscribe(baseTopic => this.baseTopic = baseTopic);
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onAcceptClick() {
    this.result.status = "processing"
    if (!this.editDeviceFormGroup.value.switchTypeFormControl) {
      this.editDeviceFormGroup.value.switchTypeFormControl = 'none' //=> phải sửa thành ''
    }
    if (!this.editDeviceFormGroup.value.nameFormControl) {
      this.editDeviceFormGroup.value.nameFormControl = this.data.virtualDevice.topic
    }
    if (this.editDeviceFormGroup.value.switchTypeFormControl !== 'none' ||
      this.editDeviceFormGroup.value.nameFormControl != this.data.virtualDevice.nameFormControl ||
      this.editDeviceFormGroup.value.PINFormControl
    ) {
      var new_friendly_name;
      if(this.data.virtualDevice.room==""){
        new_friendly_name = this.editDeviceFormGroup.value.nameFormControl;
      } else {
        new_friendly_name = this.data.virtualDevice.room + "/" + this.editDeviceFormGroup.value.nameFormControl;
      }
      var payload = {
        "from": this.data.virtualDevice.topic,
        "to": new_friendly_name,
        "homeassistant_rename":true
      };
      // PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/device/rename", payload);
      this.clientMqtt.publish("zigbee2mqtt/bridge/request/device/rename", JSON.stringify(payload))

      // PubSub.subscribe(this.baseTopic+"zigbee2mqtt/bridge/response/device/rename").subscribe({
      //   next: (data) => {
      //     console.log(data);
      //     console.log(data.value.status);
          
      //     if(data.value.status == "ok") {
      //       this.result.status = true;
      //     }else{
      //       this.result.status = false;
      //     }
      //   },
      //   error: (error) => console.error(error),
      //   complete: () => console.log("Done"),
      // });
      this.mqttSubscriptions[0] = this.clientMqtt.topic("zigbee2mqtt/bridge/response/device/rename").subscribe((message: IMqttMessage) => {
        let messageJSON = JSON.parse(message.payload.toString())
        console.log("message: " + messageJSON.text);
        if(messageJSON.status == "ok") {
          this.result.status = true;
        }else{
          this.result.status = false;
        }
      });
    } else {
      this.result = {
        status: false
      }
    }
  }
}
