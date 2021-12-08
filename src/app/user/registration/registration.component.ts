import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public statusRegistration : any;

  public information = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    phone: new FormControl('', [Validators.required]),
  })
  
  constructor(
    private auth: AuthServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.statusRegistration = {
      message : ""
    }
  }

  public async registration() {
    if (this.information.value.password == this.information.value.repassword) {
      this.statusRegistration =  await this.auth.signUp(this.information)
      if (!this.statusRegistration.message) {
        const profile : object = {
          phone : this.information.value.phone,
          firstname : this.information.value.firstname,
          lastname : this.information.value.lastname
        }
        let edit : any = await this.auth.updateProfileUser(profile)
        if (edit) {
          this.statusRegistration = "SIGNUP_OK";
          this.router.navigate(['/confirm-email'])
        };
        this.router.navigate(['/confirm-email'])
      }
    } else {
      this.statusRegistration.message = "Xác nhận mật khẩu không trùng khớp"
    }
  }
}
