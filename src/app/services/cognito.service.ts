import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Amplify, Auth, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub";
import * as AWS from "aws-sdk";

import { environment } from "../../environments/environment";
import { Stringifiable } from "query-string";

export interface IUser {
  email: string;
  password: string;
  repassword: string; //confirm_password in signUp(); new_password in forgotPasswordSubmit when forgot password
  firstname: string;
  lastname: string;
  phonenumber: string;
  showPassword: boolean;
  code: string;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class CognitoService {
  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);

    // Apply plugin with configuration
    Amplify.addPluggable(
      new AWSIoTProvider({
        aws_pubsub_region: "ap-southeast-1",
        aws_pubsub_endpoint:
          "wss://a2b1f06oxa84iu-ats.iot.ap-southeast-1.amazonaws.com/mqtt",
      })
    );
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        "custom:first_name": user.firstname,
        "custom:last_name": user.lastname,
        "custom:phone_number": user.phonenumber,
      },
    }).then(() => {});
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code).then(() => {});
  }

  public resendSignUpCode(user) {
    return Auth.resendSignUp(user.email);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password).then(() => {
      this.authenticationSubject.next(true);
    });
  }

  public forgotPassword(user: IUser): Promise<any> {
    // Send confirmation code to user's email
    return Auth.forgotPassword(user.email)
      // .then((data) => console.log(data))
      // .catch((err) => console.log(err));
  }

  public forgotPasswordSubmit(user: IUser): Promise<any> {
    // Collect confirmation code and new password, then
    return Auth.forgotPasswordSubmit(user.email, user.code, user.password)
      // .then((data) => console.log(data))
      // .catch((err) => console.log(err));
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated() {
    if (this.authenticationSubject.value) {
      return true;
    }
    return false;
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public currentSession(): Promise<any> {
    return Auth.currentSession();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser().then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }

  public publish() {
    PubSub.publish("myTopic1", { msg: "Log in successfully" });
  }

  public subscribe() {
    PubSub.subscribe("myTopic1").subscribe({
      next: (data) => console.log("Message received", data),
      error: (error) => console.error(error),
      complete: () => console.log("Done"),
    });
  }

  public async attach_Policy() {
    const credentials = await Auth.currentCredentials();

    const iot = new AWS.Iot({
      region: "ap-southeast-1",
      credentials: Auth.essentialCredentials(credentials),
    });

    const policyName = "angularCognito";
    const target = credentials.identityId;

    const { policies } = await iot.listAttachedPolicies({ target }).promise();
    if (!policies.find((policy) => policy.policyName === policyName)) {
      await iot.attachPolicy({ policyName, target }).promise();
    }
  }

  public getIdentityID() {
    Auth.currentCredentials().then((info) => {
      console.log(info.identityId);
    });
  }
}
