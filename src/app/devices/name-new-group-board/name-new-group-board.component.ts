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
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-name-new-group-board',
  templateUrl: './name-new-group-board.component.html',
  styleUrls: ['./name-new-group-board.component.css']
})
export class NameNewGroupBoardComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];
  public baseTopic: any;

  public editDeviceFormGroup = new FormGroup({
    switchTypeFormControl : new FormControl(''),
    PINFormControl : new FormControl(''),
    friendly_nameFormControl : new FormControl(''),
  });

  matcher = new MyErrorStateMatcher()

  public result : any = {
    status : 'waitting_for_input'
  }

  constructor(
    public dialogRef: MatDialogRef<NameNewGroupBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService,
    private readonly clientMqtt: CustomMqttService,
    private cognito: CognitoService,
  ) { }

  ngOnInit(): void {
    this.cognito.currentBaseTopic.subscribe(baseTopic => this.baseTopic = baseTopic);
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onAcceptClick() {
    // this.result.status = "processing"
    if (this.editDeviceFormGroup.value.friendly_nameFormControl=="") {
      this.result.status=false;
      return;
    }else {
      var payload = {
        "friendly_name": this.editDeviceFormGroup.value.friendly_nameFormControl
      };
      // PubSub.publish(this.baseTopic+"zigbee2mqtt/bridge/request/group/add", payload);
      this.clientMqtt.publish("zigbee2mqtt/bridge/request/group/add", JSON.stringify(payload))

      this.result.status=true;
    }
  }

}
