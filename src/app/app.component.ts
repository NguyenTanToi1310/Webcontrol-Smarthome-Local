import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
// import { CommonServiceService } from './services/common-service.service';
import { VoiceRecoderComponent } from './services/voice-recoder/voice-recoder.component';
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebControl';
  
  public userInfor : any;
  public logined: boolean;
  public numberDeviceShare: number;

  constructor(
    public auth: AuthServiceService,
    // public common: CommonServiceService,
    public router: Router,
    public dialog: MatDialog
  ) {
    this.logined = this.auth.isLogin()
    if (this.logined) {
      // this.userInfor = this.common.userInfor
    } else {
      this.userInfor = ""
    }

    // this.common.getShareRequest()
    // this.common.numberDeviceShare$.subscribe(number =>{
      // this.numberDeviceShare = number
    // })
  }

  ngOnInit() {
    this.auth.loginedCurrentMessage.subscribe(message => {
      this.logined = message
      if (this.logined) {
        // this.userInfor = this.common.userInfor;
      } else {
        this.userInfor = ""
      }
    })
    
    // this.common.getShareRequest()
    // this.common.numberDeviceShare$.subscribe(number =>{
    //   this.numberDeviceShare = number
    // })

  }

  public async logout() {
    this.auth.signOut()
    // await localStorage.removeItem("access_token")
    this.logined = this.auth.isLogin()
    this.userInfor = ""
    location.reload()
  }

  openDialogVoiceRecoder(): void {
    const dialogRef = this.dialog.open(VoiceRecoderComponent, {
      width: "400px",
      // height: "100px",
      data: { }, 
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }
}
