import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { stringify } from 'querystring';
import { AuthServiceService } from "src/app/services/auth-service.service";
import { IUser } from "../../services/cognito.service";

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  user: IUser;
  public statusLogin: any;
  public statusConfirm: any;
  public isResent: boolean;
  public information = new FormGroup({
    code: new FormControl("", [Validators.required]),
  });

  constructor(private auth: AuthServiceService, private router: Router) {
    this.user = {} as IUser;
  }
  
  ngOnInit(): void {
    this.auth.userCurrentData.subscribe(user => this.user = user)
    if(this.user.email == undefined) {
      this.user.email = " USER_EMAIL_NOT_FOUND!!!";
    }
    this.statusLogin = {
      message: "",
    };
    this.statusConfirm = {
      message: "",
    };
    this.isResent = false;
  }

  public async confirmSignUp(): Promise<void> {
    this.user.code = this.information.value.code;
    this.statusConfirm = await this.auth.confirmSignUp(this.user);
    if (!this.statusConfirm) {
      this.isResent = false;
      this.statusConfirm = "SIGNUP_OK";
      this.statusLogin = await this.auth.signIn(this.user);
      if (!this.statusLogin) {
        this.auth.attach_Policy();
        this.auth.signOut();
        this.router.navigate(['/login']);
      }
    }
  }

  public async resendSignUpCode(): Promise<void> {
    this.isResent = true;
    this.auth.resendSignUpCode(this.user);
  }
}
