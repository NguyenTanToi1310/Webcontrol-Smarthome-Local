import { Injectable } from "@angular/core";
// import { AngularFireAuth } from "@angular/fire/auth";
// import { CommonServiceService } from "./common-service.service";
import { BehaviorSubject } from "rxjs";
// import { AngularFireDatabase } from "@angular/fire/database";
import * as qs from "query-string";
import { HttpClient } from "@angular/common/http";

import { IUser, CognitoService } from "./cognito.service";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  logined = new BehaviorSubject<boolean>(false);
  loginedCurrentMessage = this.logined.asObservable();

  user = new BehaviorSubject<IUser>({} as IUser);
  userCurrentData = this.user.asObservable();

  constructor(
    // public afAuth: AngularFireAuth,
    // public afdb: AngularFireDatabase,
    private cognitoService: CognitoService,
    // private common: CommonServiceService,
    private http: HttpClient
  ) {}

  public signUp(user) {
    // dang ky
    return new Promise<any>(async (resolve, reject) => {
      await this.cognitoService
        .signUp(user)
        .then(async (res) => {
          resolve(res);
        })
        .catch((error) => {
          resolve(error);
          reject(error);
        });
    });
  }

  public signIn(user) {
    // dang nhap
    // return new Promise<any>(async (resolve, reject) => {
    //   await this.cognitoService
    //     .signIn(user)
    //     .then(async (res) => {
    //       resolve(res);
    //     })
    //     .catch((error) => {
    //       resolve(error);
    //       reject(error);
    //     });
    // });
    this.cognitoService.signIn(user);
  }

  public signOut() {
    // dang xuat
    return new Promise<any>(async (resolve, reject) => {
      this.cognitoService
        .signOut()
        .then(async (res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public isLogin() {
    // co dang nhap hay chua
    if (this.cognitoService.isAuthenticated()) {
      this.logined.next(true);
      return true;
    }
    this.logined.next(false);
    return false;
  }

  public confirmSignUp(user): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      await this.cognitoService
        .confirmSignUp(user)
        .then(async (res) => {
          resolve(res);
        })
        .catch((error) => {
          resolve(error);
          reject(error);
        });
    });
  }

  public resendSignUpCode(user) {
    return new Promise<any>(async (resolve, reject) => {
      await this.cognitoService
        .resendSignUpCode(user)
        .then(async (res) => {
          resolve(res);
        })
        .catch((error) => {
          resolve(error);
          reject(error);
        });
    });
  }

  public forgotPassword(user) {
    return new Promise<any>(async (resolve, reject) => {
      await this.cognitoService
        .forgotPassword(user)
        .then(async (res) => {
          resolve(res);
        })
        .catch((error) => {
          resolve(error);
          reject(error);
        });
    });
  }

  public forgotPasswordSubmit(user) {
    return new Promise<any>(async (resolve, reject) => {
      await this.cognitoService
        .forgotPasswordSubmit(user)
        .then(async (res) => {
          resolve(res);
        })
        .catch((error) => {
          resolve(error);
          reject(error);
        });
    });
  }

  // public async sendVerificationMail() {
  //   return await this.afAuth.currentUser
  //     .then(async (user) => {
  //       return await user.sendEmailVerification();
  //     })
  //     .catch((error) => {
  //       /*console.log(error) */
  //     });
  // }

  // // public async editProfile(profile: any) {
  // //   let editURL =
  // //     "https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/editprofile";
  // //   const data = qs.stringify({
  // //     oldPassword: profile.oldPassword,
  // //     newPassword: profile.newPassword,
  // //     phone: profile.phone,
  // //     firstname: profile.firstname,
  // //     lastname: profile.lastname,
  // //   });
  // //   await this.http.post<unknown>(editURL, data).subscribe((res) => {
  // //     /* console.log(res) */
  // //   });
  // }

  // public async updateProfileUser(profile: any) {
  //   let information = {
  //     displayName: profile.lastname + " " + profile.firstname,
  //     phoneNumber: profile.phone,
  //   };

  //   this.afAuth.currentUser
  //     .then(async (res) => {
  //       console.log(res);
  //       return await res.updateProfile(information);
  //     })
  //     .catch((error) => {
  //       console.log("error: ", error);
  //     });
  // }

  public changeUserCurrentData(user: IUser) {
    this.user.next(user);
  }

  public getIdentityID() {
    this.cognitoService.getIdentityID();
  }

  public attach_Policy() {
    this.cognitoService.attach_Policy();
  }
}
