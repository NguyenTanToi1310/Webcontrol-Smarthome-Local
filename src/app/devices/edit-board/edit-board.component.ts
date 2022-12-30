import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PubSub } from 'aws-amplify';
import { CommonServiceService } from 'src/app/services/common-service.service';

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
    public dialogRef: MatDialogRef<EditBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService
  ) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onAcceptClick() {
    this.result.status = "processing"
    if (!this.editDeviceFormGroup.value.switchTypeFormControl) {
      this.editDeviceFormGroup.value.switchTypeFormControl = 'none' //=> phải sửa thành ''
    }
    if (!this.editDeviceFormGroup.value.friendly_nameFormControl) {
      this.editDeviceFormGroup.value.friendly_nameFormControl = this.data.virtualDevice.topic
    }
    if (this.editDeviceFormGroup.value.switchTypeFormControl !== 'none' ||
      this.editDeviceFormGroup.value.friendly_nameFormControl != this.data.virtualDevice.friendly_nameFormControl ||
      this.editDeviceFormGroup.value.PINFormControl
    ) {
      var payload = {
        "from": this.data.virtualDevice.topic,
        "to": this.editDeviceFormGroup.value.friendly_nameFormControl,
        "homeassistant_rename":true
      };
      PubSub.publish("zigbee2mqtt/bridge/request/device/rename", payload);

      PubSub.subscribe("zigbee2mqtt/bridge/response/device/rename").subscribe({
        next: (data) => {
          console.log(data);
          console.log(data.value.status);
          
          if(data.value.status == "ok") {
            this.result.status = true;
          }else{
            this.result.status = false;
          }
        },
        error: (error) => console.error(error),
        complete: () => console.log("Done"),
      });
    } else {
      this.result = {
        status: false
      }
    }
  }

}
