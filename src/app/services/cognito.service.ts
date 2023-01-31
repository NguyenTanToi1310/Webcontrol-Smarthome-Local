import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Amplify, Auth, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub";
import * as AWS from "aws-sdk";
import { MqttOverWSProvider } from "@aws-amplify/pubsub/lib/Providers";

import { environment } from "../../environments/environment";
import { Stringifiable } from "query-string";
import { connect } from "http2";
import { CustomMqttService } from '../services/mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
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
  mqttSubscriptions: Subscription[] = [];
  private authenticationSubject: BehaviorSubject<any>;

  private devicesListSource = new BehaviorSubject([]);
  currentDevicesList = this.devicesListSource.asObservable();

  private roomsListSource = new BehaviorSubject([]);
  currentRoomsList = this.roomsListSource.asObservable();

  private deviceDataSource = new BehaviorSubject([]); //data of one device
  currentDeviceData = this.deviceDataSource.asObservable();

  private devicesDataSource = new BehaviorSubject([]); //data of all device
  currentDevicesData = this.devicesDataSource.asObservable();

  private groupsSource = new BehaviorSubject([]);
  currentGroups = this.groupsSource.asObservable();

  private baseTopicSource = new BehaviorSubject("");
  currentBaseTopic = this.baseTopicSource.asObservable();
  public baseTopic = "";

  constructor(private readonly clientMqtt: CustomMqttService) {
    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);

    // PubSub.addPluggable(new MqttOverWSProvider({
    //   aws_pubsub_endpoint: 'ws://192.168.137.66:9001/',
    //   aws_appsync_dangerously_connect_to_http_endpoint_for_testing: true, // Do not use SSL
    // }));

    // PubSub.subscribe("broker-to-web").subscribe({
    //   next: (data) => console.log("Broker to web:\n", data.value),
    //   error: (error) => console.error(error),
    //   complete: () => console.log("Done"),
    // });
    
    // PubSub.publish("web-to-broker", { "msg": "Website hello broker" });
    // this.baseTopicSource.next(this.baseTopic);
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
    // return Auth.signIn(user.email, user.password).then(() => {
    //   this.authenticationSubject.next(true);
    // });
    if(user.email == "admin" && user.password == "admin"){
      this.authenticationSubject.next(true);
      return;
    }
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
    // PubSub.publish("myTopic1", { msg: "Log in successfully" });
  }

  public startConnection() {
    // PubSub.publish(this.baseTopic + "publicweb/connect", "");
    this.clientMqtt.publish("publicweb/connect", JSON.stringify({"NA": "NA"}))
  }

  // public subscribe() {
  //   PubSub.subscribe("myTopic1").subscribe({
  //     next: (data) => console.log("Message received", data),
  //     error: (error) => console.error(error),
  //     complete: () => console.log("Done"),
  //   });
  // }

  public getDeviceListAndEachDeviceData(): any {
    // PubSub.subscribe(this.baseTopic + "zigbee2mqtt/bridge/devices").subscribe({
    //   next: (data) => {
    //     // this.devicesListSource.next(data.value);
    //     console.log(
    //       this.baseTopic + "zigbee2mqtt/bridge/devices: ",
    //       data.value
    //     );

    //     var list = new Array();
    //     this.devicesDataSource.next(list);

    //     var roomsList = [["living-room"], ["kitchen-room"], ["bed-room"]];

    //     let devicesList = data.value;
    //     for (var device of devicesList) {
    //       if (device.friendly_name === "Coordinator") {
    //         continue;
    //       }
    //       if (device.model_id === "TS0505B") {
    //         device.model_id = "WH_LEDRGB";
    //       }
    //       device.linkquality = "0";

    //       if (device.friendly_name.includes("/")) {
    //         device.room = device.friendly_name.substring(0, device.friendly_name.lastIndexOf("/"));
    //         device.name = device.friendly_name.substring(device.friendly_name.indexOf("/") + 1, device.friendly_name.length);
    //       } else {
    //         device.room = "";
    //         device.name = device.friendly_name;
    //       }
    //       for (let [index, room] of roomsList.entries()) {
    //         if (device.room == room[0]) {
    //           //room[0] = "living-room" or "kitchen-room" or "bed-room"
    //           roomsList[index].push(device.name);
    //         }
    //       }
    //       // console.log(".............\n", roomsList);
    //       this.roomsListSource.next(roomsList);

    //       PubSub.subscribe(
    //         this.baseTopic + "zigbee2mqtt/" + device.friendly_name
    //       ).subscribe({
    //         next: (data) => {
    //           data.value.topic = data.value[
    //             Object.getOwnPropertySymbols(data.value)[0]
    //           ]
    //             .split(this.baseTopic + "zigbee2mqtt/")
    //             .pop(); //insert topic (removed prefix) into this object

    //           for (var tempDevice of devicesList) {
    //             if (tempDevice.friendly_name == data.value.topic) {
    //               data.value.model_id = tempDevice.model_id;
    //               data.value.ieee_address = tempDevice.ieee_address;
    //               data.value.room = data.value.topic.substring(
    //                 0,
    //                 data.value.topic.lastIndexOf("/")
    //               );
    //               data.value.name = data.value.topic.substring(
    //                 data.value.topic.indexOf("/") + 1,
    //                 data.value.topic.length
    //               );
    //             }
    //           }
    //           this.deviceDataSource.next(data.value);
    //           this.getDevicesData(data.value);
    //         },
    //         error: (error) => console.error(error),
    //         complete: () => console.log("Done"),
    //       });
    //       PubSub.publish(
    //         this.baseTopic + "zigbee2mqtt/" + device.friendly_name + "/get",
    //         { state: "" }
    //       );
    //     }
    //     this.devicesListSource.next(devicesList);
    //   },
    //   error: (error) => console.error(error),
    //   complete: () => console.log("Done"),
    // });
    this.mqttSubscriptions[0] = this.clientMqtt.topic("zigbee2mqtt/bridge/devices").subscribe((message: IMqttMessage) => {
      let messageJSON = JSON.parse(message.payload.toString())
      console.log("message: " + messageJSON.text);

      var list = new Array();
      this.devicesDataSource.next(list);

      var roomsList = [["living-room"], ["kitchen-room"], ["bed-room"]];

      let devicesList = messageJSON;
      for (var device of devicesList) {
        if (device.friendly_name === "Coordinator") {
          continue;
        }
        if (device.model_id === "TS0505B") {
          device.model_id = "WH_LEDRGB";
        }
        device.linkquality = "0";

        if (device.friendly_name.includes("/")) {
          device.room = device.friendly_name.substring(0, device.friendly_name.lastIndexOf("/"));
          device.name = device.friendly_name.substring(device.friendly_name.indexOf("/") + 1, device.friendly_name.length);
        } else {
          device.room = "";
          device.name = device.friendly_name;
        }
        for (let [index, room] of roomsList.entries()) {
          if (device.room == room[0]) {
            //room[0] = "living-room" or "kitchen-room" or "bed-room"
            roomsList[index].push(device.name);
          }
        }
        // console.log(".............\n", roomsList);
        this.roomsListSource.next(roomsList);

        // PubSub.subscribe(
        //   this.baseTopic + "zigbee2mqtt/" + device.friendly_name
        // ).subscribe({
        //   next: (data) => {
        //     data.value.topic = data.value[
        //       Object.getOwnPropertySymbols(data.value)[0]
        //     ]
        //       .split(this.baseTopic + "zigbee2mqtt/")
        //       .pop(); //insert topic (removed prefix) into this object

        //     for (var tempDevice of devicesList) {
        //       if (tempDevice.friendly_name == data.value.topic) {
        //         data.value.model_id = tempDevice.model_id;
        //         data.value.ieee_address = tempDevice.ieee_address;
        //         data.value.room = data.value.topic.substring(
        //           0,
        //           data.value.topic.lastIndexOf("/")
        //         );
        //         data.value.name = data.value.topic.substring(
        //           data.value.topic.indexOf("/") + 1,
        //           data.value.topic.length
        //         );
        //       }
        //     }
        //     this.deviceDataSource.next(data.value);
        //     this.getDevicesData(data.value);
        //   },
        //   error: (error) => console.error(error),
        //   complete: () => console.log("Done"),
        // });
        this.mqttSubscriptions[1] = this.clientMqtt.topic("zigbee2mqtt/" + device.friendly_name).subscribe((message: IMqttMessage) => {
          let messageJSON = JSON.parse(message.payload.toString())
          console.log("message: " + messageJSON.text);
          messageJSON.topic = messageJSON[
            Object.getOwnPropertySymbols(messageJSON)[0]
          ]
            .split(this.baseTopic + "zigbee2mqtt/")
            .pop(); //insert topic (removed prefix) into this object

          for (var tempDevice of devicesList) {
            if (tempDevice.friendly_name == messageJSON.topic) {
              messageJSON.model_id = tempDevice.model_id;
              messageJSON.ieee_address = tempDevice.ieee_address;
              messageJSON.room = messageJSON.topic.substring(
                0,
                messageJSON.topic.lastIndexOf("/")
              );
              messageJSON.name = messageJSON.topic.substring(
                messageJSON.topic.indexOf("/") + 1,
                messageJSON.topic.length
              );
            }
          }
          this.deviceDataSource.next(messageJSON);
          this.getDevicesData(messageJSON);
        });

        // PubSub.publish(
        //   this.baseTopic + "zigbee2mqtt/" + device.friendly_name + "/get",
        //   { state: "" }
        // );
        this.clientMqtt.publish("zigbee2mqtt/" + device.friendly_name + "/get", JSON.stringify({ state: "" }));

      }
      this.devicesListSource.next(devicesList);
    });
  }

  public updateNewJoinedDEvice(device: any): any {
    // PubSub.subscribe(
    //   this.baseTopic + "zigbee2mqtt/" + device.friendly_name
    // ).subscribe({
    //   next: (data) => {
    //     data.value.topic = data.value[
    //       Object.getOwnPropertySymbols(data.value)[0]
    //     ]
    //       .split("zigbee2mqtt/")
    //       .pop(); //insert topic (removed prefix) into this object
    //     this.deviceDataSource.next(data.value);
    //     this.getDevicesData(data.value);
    //   },
    //   error: (error) => console.error(error),
    //   complete: () => console.log("Done"),
    // });
    this.mqttSubscriptions[2] = this.clientMqtt.topic("zigbee2mqtt/" + device.friendly_name).subscribe((message: IMqttMessage) => {
      let messageJSON = JSON.parse(message.payload.toString())
      messageJSON.topic = messageJSON[
        Object.getOwnPropertySymbols(messageJSON)[0]
      ]
        .split("zigbee2mqtt/")
        .pop(); //insert topic (removed prefix) into this object
      this.deviceDataSource.next(messageJSON);
      this.getDevicesData(messageJSON);
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
    if (device.model_id == "WH_LEDRGB" || device.model_id == "den trang") {
      device.brightness = Number((device.brightness / 2.54).toFixed(0)); //scale to %
    }

    if (list.length == 0) {
      list.push(device);
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].ieee_address == device.ieee_address) {
        list[i] = device;
        this.devicesDataSource.next(list);
        return;
      }
    }
    list.push(device);
    this.devicesDataSource.next(list);
  }

  public getGroupsData(): any {
    // PubSub.subscribe(this.baseTopic + "zigbee2mqtt/bridge/groups").subscribe({
    //   next: (data) => {
    //     console.log("group received\n", data.value);
    //     this.groupsSource.next(data.value);
    //   },
    //   error: (error) => console.error(error),
    //   complete: () => console.log("Done"),
    // });
    this.mqttSubscriptions[3] = this.clientMqtt.topic("zigbee2mqtt/bridge/groups").subscribe((message: IMqttMessage) => {
      let messageJSON = JSON.parse(message.payload.toString())
      console.log("message: " + messageJSON.text);
        this.groupsSource.next(messageJSON);
    });
  }
}
