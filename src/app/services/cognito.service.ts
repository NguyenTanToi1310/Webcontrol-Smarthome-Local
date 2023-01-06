import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Amplify, Auth, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub";
import * as AWS from "aws-sdk";
import { MqttOverWSProvider } from "@aws-amplify/pubsub/lib/Providers";

import { environment } from "../../environments/environment";
import { Stringifiable } from "query-string";
import { connect } from "http2";
// import { ColorConverter } from "cie-rgb-color-converter"
const ColorConverter = require("cie-rgb-color-converter");
var colorsys = require("colorsys");

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

  private devicesListSource = new BehaviorSubject("Default message");
  currentDevicesList = this.devicesListSource.asObservable();

  private deviceDataSource = new BehaviorSubject("Default message"); //data of one device
  currentDeviceData = this.deviceDataSource.asObservable();

  private devicesDataSource = new BehaviorSubject([]); //data of all device
  currentDevicesData = this.devicesDataSource.asObservable();

  private groupsSource = new BehaviorSubject([]);
  currentGroups = this.groupsSource.asObservable();

  private baseTopicSource = new BehaviorSubject("");
  currentBaseTopic = this.baseTopicSource.asObservable();
  public baseTopic = "hubid0/";

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
      // new MqttOverWSProvider({
      //   aws_pubsub_endpoint: "ws://192.168.1.21:8080/mqtt",
      //   aws_appsync_dengerously_connect_to_http_endpoint_for_testing: true,
      // })
    );
    // console.log("abcdef");
    // PubSub.publish("zigbee2mqtt/", { msg: "Log in successfully" });
    this.baseTopicSource.next(this.baseTopic);
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
    return Auth.forgotPassword(user.email);
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err));
  }

  public forgotPasswordSubmit(user: IUser): Promise<any> {
    // Collect confirmation code and new password, then
    return Auth.forgotPasswordSubmit(user.email, user.code, user.password);
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

  public publish() {
    PubSub.publish("myTopic1", { msg: "Log in successfully" });
  }

  public startConnection() {
    PubSub.publish(this.baseTopic+"publicweb/connect", "connect");
  }

  public subscribe() {
    PubSub.subscribe("myTopic1").subscribe({
      next: (data) => console.log("Message received", data),
      error: (error) => console.error(error),
      complete: () => console.log("Done"),
    });
  }

  public getDeviceListAndEachDeviceData(): any {
    PubSub.subscribe(this.baseTopic+"zigbee2mqtt/bridge/devices").subscribe({
      next: (data) => {
        // console.log("Device list received\n", data);

        this.devicesListSource.next(data.value);
        console.log(this.baseTopic+"zigbee2mqtt/bridge/devices: ", data.value);

        var list = new Array();
        console.log("aaaaaaaa\n", list)
        this.devicesDataSource.next(list);
        console.log("aaaaaaaa\n", list)


        let devicesList = data.value;
        for (var device of devicesList) {
          if (
            device.friendly_name === "Coordinator" ||
            device.friendly_name === "0xa4c138acdb8cd3ff"
          ) {
            continue;
          }
          PubSub.subscribe(this.baseTopic+"zigbee2mqtt/" + device.friendly_name).subscribe({
            next: (data) => {
              data.value.topic = data.value[
                Object.getOwnPropertySymbols(data.value)[0]
              ]
                .split(this.baseTopic+"zigbee2mqtt/")
                .pop(); //insert topic (removed prefix) into this object
              
              for(var tempDevice of devicesList){
                if(tempDevice.friendly_name == data.value.topic){
                  data.value.model_id = tempDevice.model_id;
                  data.value.ieee_address = tempDevice.ieee_address;
                }
              }
              this.deviceDataSource.next(data.value);
              this.getDevicesData(data.value);
            },
            error: (error) => console.error(error),
            complete: () => console.log("Done"),
          });
          PubSub.publish(this.baseTopic+"zigbee2mqtt/" + device.friendly_name + "/get", {"state":""})
        }
      },
      error: (error) => console.error(error),
      complete: () => console.log("Done"),
    });
  }

  public updateNewJoinedDEvice(device: any): any {
    PubSub.subscribe(this.baseTopic+"zigbee2mqtt/" + device.friendly_name).subscribe({
      next: (data) => {
        data.value.topic = data.value[
          Object.getOwnPropertySymbols(data.value)[0]
        ]
          .split("zigbee2mqtt/")
          .pop(); //insert topic (removed prefix) into this object
        this.deviceDataSource.next(data.value);
        this.getDevicesData(data.value);
      },
      error: (error) => console.error(error),
      complete: () => console.log("Done"),
    });
  }

  public getDevicesData(device: any): any {
    var list = new Array();
    this.currentDevicesData.subscribe((devicesData) => (list = devicesData));

    if (device.model_id == "WH_LEDRGB") {
      let hex = colorsys.hsvToHex(
        device.color.hue,
        device.color.saturation,
        100
      );
      device.hex = hex;
    }
    if (
      device.model_id == "WH_LEDRGB" ||
      device.model_id == "den trang"
    ) {
      device.brightness = Number((device.brightness / 2.54).toFixed(0)); //scale to %
    }

    if (list.length == 0) {
      list.push(device);
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].ieee_address == device.ieee_address) {
        list[i] = device;
        this.devicesDataSource.next(list);
        console.log("listtttt\n", list);
        return;
      }
    }
    list.push(device);
    this.devicesDataSource.next(list);
    console.log("listtttt\n", list);
  }

  public getGroupsData(): any {
    PubSub.subscribe(this.baseTopic+"zigbee2mqtt/bridge/groups").subscribe({
      next: (data) => {
        console.log("group received\n", data.value);
        this.groupsSource.next(data.value);
      },
      error: (error) => console.error(error),
      complete: () => console.log("Done"),
    });
  }
}
