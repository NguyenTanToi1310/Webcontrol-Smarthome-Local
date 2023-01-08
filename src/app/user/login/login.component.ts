import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { AuthServiceService } from "src/app/services/auth-service.service";
// import { CommonServiceService } from "src/app/services/common-service.service";

import { IUser, CognitoService } from "../../services/cognito.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public information = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,
    ]),
  });

  private loginStatusSource = new BehaviorSubject<boolean>(false);
  currentLoginStatus = this.loginStatusSource.asObservable();

  public statusLogin: any;
  
  user: IUser;

  constructor(
    private router: Router,
    private cognitoService: CognitoService,
    // private common: CommonServiceService,
    private auth: AuthServiceService,
  ) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.statusLogin = {
      message: "",
    };
  }

  public async login() {
    this.user.email = this.information.value.email;
    this.user.password = this.information.value.password;

    this.statusLogin = await this.auth.signIn(this.user);
    if (!this.statusLogin) {
      this.router.navigate(["/home"]);
      this.statusLogin = "SIGNIN_OK";
      this.auth.isLogin();
    }
    // if(this.user.email == "admin" && this.user.password == "admin"){
    //   this.router.navigate(["/home"]);
    //   this.statusLogin = "SIGNIN_OK";
    //   this.loginStatusSource.next(true);
    // }
    this.cognitoService.startConnection();
    this.cognitoService.getDeviceListAndEachDeviceData();
    this.cognitoService.getGroupsData();

  }
}
