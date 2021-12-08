import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    ot_nicknameFormControl : new FormControl(''),
    en_nicknameFormControl : new FormControl(''),
  });

  matcher = new MyErrorStateMatcher()

  public result : any = {
    status : "edit"
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
    if (!this.editDeviceFormGroup.value.en_nicknameFormControl) {
      this.editDeviceFormGroup.value.en_nicknameFormControl = this.data.virtualDevice.en_nickname
    }
    if (!this.editDeviceFormGroup.value.ot_nicknameFormControl) {
      this.editDeviceFormGroup.value.ot_nicknameFormControl = this.data.virtualDevice.ot_nickname
    }
    if (this.editDeviceFormGroup.value.switchTypeFormControl !== 'none' ||
      this.editDeviceFormGroup.value.en_nicknameFormControl !== this.data.virtualDevice.en_nicknameFormControl ||
      this.editDeviceFormGroup.value.ot_nicknameFormControl != this.data.virtualDevice.ot_nicknameFormControl ||
      this.editDeviceFormGroup.value.PINFormControl
    ) {
      this.result = await this.common.editDevice(
        this.data.virtualDevice.deviceId,
        this.editDeviceFormGroup.value.en_nicknameFormControl,
        this.editDeviceFormGroup.value.ot_nicknameFormControl,
        this.editDeviceFormGroup.value.switchTypeFormControl,
        this.editDeviceFormGroup.value.PINFormControl
      )
      // console.log(this.data.virtualDevice.deviceId,
      //   this.editDeviceFormGroup.value.en_nicknameFormControl,
      //   this.editDeviceFormGroup.value.ot_nicknameFormControl,
      //   this.editDeviceFormGroup.value.switchTypeFormControl,
      //   typeof this.editDeviceFormGroup.value.PINFormControl)
    } else {
      this.result = {
        status: false
      }
    }

  }

}
