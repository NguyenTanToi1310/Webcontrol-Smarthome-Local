import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-share-board',
  templateUrl: './share-board.component.html',
  styleUrls: ['./share-board.component.css']
})
export class ShareBoardComponent implements OnInit {

  public userIDShare : any = [];
  public userEmailShare: any = [];
  public listShareHistories: any;
  public shareInformation : any = {}
  public notification : string = "";

  public shareFormGroup = new FormGroup({
    emailFormControl : new FormControl('', [Validators.required, Validators.email]),
    taskFormControl : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher()

  constructor(
    public dialogRef: MatDialogRef<ShareBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService
  ) { }

  async ngOnInit() {
    this.common.listShareHistories.subscribe(res => {
      this.listShareHistories = []
      this.userEmailShare = []
      let list = Object.keys(res)
      list.forEach(element => {
        Object.keys(res[element]).forEach(async sharers => {
          if ((res[element])[sharers].deviceId === this.data.virtualDevice.deviceId) {
            this.listShareHistories.push((res[element])[sharers].to);
            this.userEmailShare.push((await this.common.searchByUID((res[element])[sharers].to)).email)
          }
        })
        this.userIDShare.push(this.listShareHistories)
      });
    })
  }

  onNoClick() {
    this.dialogRef.close()
  }

  async onAcceptClick(deviceId: string) {
    if (!!this.shareFormGroup.value.emailFormControl && !!this.shareFormGroup.value.taskFormControl) {
      if (this.shareFormGroup.value.taskFormControl == "Share-Device") {
        this.notification = "Sharing"
      } else if (this.shareFormGroup.value.taskFormControl == "Revoke-Device") {
        this.notification = "Revoking"
      }
      let emailAlready = false;         // kiem tra email nguoi dung nhap vao da co trong danh sach share hay chua
      this.userEmailShare.forEach(email => {
        if (email === this.shareFormGroup.value.emailFormControl) {
          emailAlready = true
        }
      })
      if (!emailAlready && this.shareFormGroup.value.taskFormControl == "Share-Device") {      // neu chua co - thi co the share
        let UID = await this.common.searchByEmailUser(this.shareFormGroup.value.emailFormControl)
        if (UID !== null) {
          let resultShare : any = await this.common.shareDevice(UID[0].uid, deviceId)
          this.notification =  resultShare.status ? "Shared-Successful" : "Shared-Failed"
        } else {
          this.notification = "Invalid-Email"
        }
      } else if (emailAlready && this.shareFormGroup.value.taskFormControl == "Revoke-Device") {      // neu co - thi co the return
        let UID = await this.common.searchByEmailUser(this.shareFormGroup.value.emailFormControl)
        if (UID !== null) {
          let resultShare : any = await this.common.revokeDevice(UID[0].uid, deviceId)
          this.notification =  resultShare.status ? "Revoked-Successful" : "Revoked-Failed"
        } else {
          this.notification = "Invalid-Email"
        }
      } else if (emailAlready && this.shareFormGroup.value.taskFormControl == "Share-Device") {     // đã nằm trong danh sách share rồi
        this.notification = "Shared-Personal"
      } else if (!emailAlready && this.shareFormGroup.value.taskFormControl == "Revoke-Device") {   // chưa share nhưng thu hồi
        this.notification = "Not-Shared"
      }
    } else {
      this.notification = "Input-Email"
    }
  }
}
