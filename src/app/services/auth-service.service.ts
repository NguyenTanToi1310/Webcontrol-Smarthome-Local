import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonServiceService } from './common-service.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import * as qs from 'query-string';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  logined = new BehaviorSubject<boolean>(false);
  currentMessage = this.logined.asObservable();

  constructor(
    public afAuth: AngularFireAuth,
    public afdb: AngularFireDatabase,
    private common: CommonServiceService,
    private http: HttpClient,
  ) { }

  public signUp(information){               // dang ky
    return new Promise<any>(async (resolve, reject) => {
      await this.afAuth.createUserWithEmailAndPassword(information.value.email, information.value.password)
      .then(async res => {
        await this.sendVerificationMail();
        resolve(res);
      })
      .catch(error => {
        resolve(error);
        reject(error);
      })
    })
  }

  public signIn(information){               // dang nhap
    return new Promise<any>(async (resolve, reject) => {
      await this.afAuth.signInWithEmailAndPassword(information.value.email, information.value.password)
      .then(async res => {
        resolve(res);
      })
      .catch(error => {
        resolve(error);
        reject(error);
      })
    })
  }

  public signOut(){                         // dang xuat
    return new Promise<any>(async (resolve, reject)=> {
      this.afAuth.signOut()
      .then(async res => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
    })
  }

  public isLogin() {                        // co dang nhap hay chua
    if (!!localStorage.getItem('access_token')) {
      this.common.decodeAccessToken(localStorage.getItem('access_token'));
      if (!this.common.isExpireDateToken && this.common.userInfor["email_verified"]) {
        this.logined.next(true);
        return true;
      }
    }
    this.logined.next(false);
    return false;
  }

  public async sendVerificationMail() {
    return await this.afAuth.currentUser
    .then(async (user) => {
      return await user.sendEmailVerification();
    })
    .catch((error) => { /*console.log(error) */ })
  }

  public async editProfile( profile : any ) {
    let editURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/editprofile'
    const data = qs.stringify({
      oldPassword: profile.oldPassword,
			newPassword : profile.newPassword,
			phone : profile.phone,
			firstname : profile.firstname,
			lastname : profile.lastname
    })
    await this.http.post<unknown>(editURL, data).subscribe(res => { /* console.log(res) */ })
  }

  public async updateProfileUser( profile : any ) {
    let information = {
      displayName : profile.lastname + " " + profile.firstname,
      phoneNumber: profile.phone
    }

    this.afAuth.currentUser
    .then(async (res) => {
      console.log(res)
      return await res.updateProfile(information)
    })
    .catch((error) => { console.log("error: ", error) })
  }
}
