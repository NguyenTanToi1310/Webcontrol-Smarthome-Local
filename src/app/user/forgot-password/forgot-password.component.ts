import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { IUser, CognitoService } from "../../services/cognito.service";
import { threadId } from "worker_threads";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public statusRegistration: any;
  public isCodeSent: boolean; //verification code is sent ???
  
  user: IUser;

  public information = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    code: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    repassword: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
  });


  constructor(private auth: AuthServiceService, private router: Router) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.isCodeSent = false;

    this.statusRegistration = {
      message: "",
    };
    if(this.user.email == undefined) {
      this.user.email = "USER_EMAIL_NOT_FOUND!!!";
    }
  }

  public async forgotPassword(){
    this.user.email = this.information.value.email;

    this.statusRegistration = await this.auth.forgotPassword(this.user);
    if (!this.statusRegistration.message) {
      this.isCodeSent = true;
    }
  }

  public async forgotPasswordSubmit(){
    this.user.password = this.information.value.password;
    this.user.code = this.information.value.code;
    
    if (this.information.value.password == this.information.value.repassword) {
      this.statusRegistration = await this.auth.forgotPasswordSubmit(this.user);
      if (!this.statusRegistration.message) {
        this.router.navigate(['/login']);
      }
    } else {
      this.statusRegistration.message = "Xác nhận mật khẩu không trùng khớp";
    }
  }

  public async changeEmail(): Promise<void> {
    this.isCodeSent = false;
  }
}
