import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AppComponent } from 'src/app/app.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public information = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  public statusLogin : any

  constructor(
    private auth: AuthServiceService, 
    private router: Router,
    private common: CommonServiceService,
  ) { }

  ngOnInit(): void {
    this.statusLogin = {
      message : ""
    }
  }

  public async login() {
    this.statusLogin = await this.auth.signIn(this.information)
    if (!this.statusLogin.message) {
      let access_token = await this.statusLogin.user.getIdToken()
      await localStorage.setItem('access_token', access_token)
      await this.common.decodeAccessToken(access_token)
      if (this.common.userInfor["email_verified"]) {
        this.router.navigate(['/home'])
        this.statusLogin = "SIGNIN_OK"
        this.auth.isLogin()
      } else {
        localStorage.removeItem("access_token")
        this.router.navigate(['/confirm-email'])
      }
    }
  }
}
