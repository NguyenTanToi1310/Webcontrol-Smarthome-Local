import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { IUser, CognitoService } from "../../services/cognito.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  public statusRegistration: any;
  
  user: IUser;

  public information = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    repassword: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    phone: new FormControl("", [Validators.required]),
  });


  constructor(private auth: AuthServiceService, private router: Router) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.statusRegistration = {
      message: "",
    };
  }

  public async registration() {
    this.user.email = this.information.value.email;
    this.user.password = this.information.value.password;
    this.user.firstname = this.information.value.firstname;
    this.user.lastname = this.information.value.lastname;
    this.user.phonenumber = "0" + String(this.information.value.phone);

    this.auth.changeUserEmailCurrentMessage(this.user.email)    // 
    this.auth.changeUserCurrentData(this.user);
    
    if (this.information.value.password == this.information.value.repassword) {
      this.statusRegistration = await this.auth.signUp(this.user);
      if (!this.statusRegistration) {
        this.router.navigate(["/confirm-email"]);
      }
    } else {
      this.statusRegistration.message = "Xác nhận mật khẩu không trùng khớp";
    }
  }

}
