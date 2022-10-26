import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthServiceService, private router: Router) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.auth.userCurrentData.subscribe(user => this.user = user)
    this.statusLogin = {
      message: "",
    };
  }

  public async confirmSignUp(): Promise<void> {
    this.auth.confirmSignUp(this.user)
    .then(async () => {
      this.statusLogin = await this.auth.signIn(this.user);
      if (!this.statusLogin) {
        console.log("confirmSignUp() ");
        this.auth.getIdentityID();
        this.auth.attach_Policy();
        this.auth.signOut();
        this.router.navigate(['/login']);
      }
    }).catch(() => { });
  }
}
