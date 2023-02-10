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
  indexSubscriptions: number = 0;
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

  private groupsDataSource = new BehaviorSubject([]); //data of all groups
  currentGroupsData = this.groupsDataSource.asObservable();

  private scenesSource = new BehaviorSubject([]);
  currentScenes = this.scenesSource.asObservable();

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
    this.mqttSubscriptions[this.indexSubscriptions++] = this.clientMqtt.topic("zigbee2mqtt/bridge/devices").subscribe((message: IMqttMessage) => {
      let messageJSON = JSON.parse(message.payload.toString())
      console.log("message: " + message.payload.toString());

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
        this.mqttSubscriptions[this.indexSubscriptions++] = this.clientMqtt.topic("zigbee2mqtt/" + device.friendly_name).subscribe((message: IMqttMessage) => {
          let messageJSON = JSON.parse(message.payload.toString())
          console.log("message: " + message.payload.toString());
          messageJSON.topic = message.topic.toString()
            .split(this.baseTopic + "zigbee2mqtt/")
            .pop(); //insert topic (removed prefix) into this object
          console.log(messageJSON.topic);
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

  // public updateNewJoinedDEvice(device: any): any {
  //   // PubSub.subscribe(
  //   //   this.baseTopic + "zigbee2mqtt/" + device.friendly_name
  //   // ).subscribe({
  //   //   next: (data) => {
  //   //     data.value.topic = data.value[
  //   //       Object.getOwnPropertySymbols(data.value)[0]
  //   //     ]
  //   //       .split("zigbee2mqtt/")
  //   //       .pop(); //insert topic (removed prefix) into this object
  //   //     this.deviceDataSource.next(data.value);
  //   //     this.getDevicesData(data.value);
  //   //   },
  //   //   error: (error) => console.error(error),
  //   //   complete: () => console.log("Done"),
  //   // });
  //   this.mqttSubscriptions[this.indexSubscriptions++] = this.clientMqtt.topic("zigbee2mqtt/" + device.friendly_name).subscribe((message: IMqttMessage) => {
  //     let messageJSON = JSON.parse(message.payload.toString())
  //     messageJSON.topic = messageJSON[
  //       Object.getOwnPropertySymbols(messageJSON)[0]
  //     ]
  //       .split("zigbee2mqtt/")
  //       .pop(); //insert topic (removed prefix) into this object
  //     this.deviceDataSource.next(messageJSON);
  //     this.getDevicesData(messageJSON);
  //   });
  // }

  public getDevicesData(device: any): any {
    var list = new Array();
    this.currentDevicesData.subscribe((devicesData) => (list = devicesData));

    if (device.model_id == "WH_LEDRGB") {
      if (device.color == undefined) {
        let txt = '{"x": 0, "y": 0}';
        device.color = JSON.parse(txt);
      }
      let rgb = this.cie_to_rgb(device.color.x, device.color.y, 254);
      let hex = this.rgbToHex(rgb[0], rgb[1], rgb[2]);
      console.log(rgb);
      device.hex = hex;
      console.log(hex);
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
    this.mqttSubscriptions[this.indexSubscriptions++] = this.clientMqtt.topic("zigbee2mqtt/bridge/groups").subscribe((message: IMqttMessage) => {
      let messageJSON = JSON.parse(message.payload.toString())
      console.log("message: " + message.payload.toString());
      this.groupsSource.next(messageJSON);
      var list = new Array();
        this.groupsDataSource.next(list);

        for (var group of messageJSON) {
          this.mqttSubscriptions[this.indexSubscriptions++] = this.clientMqtt.topic("zigbee2mqtt/" + group.friendly_name).subscribe((message: IMqttMessage) => {
            let messageJSON = JSON.parse(message.payload.toString())
            if (list.length == 0) {
              list.push(messageJSON);
            }
            for (var i = 0; i < list.length; i++) {
              if (list[i].friendly_name == messageJSON.friendly_name) {
                list[i] = messageJSON;
                // this.devicesDataSource.next(list);
                // list.push(data.value);
                break;
              }
            }
            if (i == list.length) {
              list.push(messageJSON);
              this.devicesDataSource.next(list);
            }
          });
        }
    });
  }

  public getScenes(): any {
    this.mqttSubscriptions[this.indexSubscriptions++] = this.clientMqtt.topic("zigbee2mqtt/bridge/scenes").subscribe((message: IMqttMessage) => {   
      let messageJSON = JSON.parse(message.payload.toString())
      this.scenesSource.next(messageJSON);
    });
  }

  cie_to_rgb(x: number, y: number, brightness: number) {
    //Set to maximum brightness if no custom value was given (Not the slick ECMAScript 6 way for compatibility reasons)
    if (brightness === undefined) {
      brightness = 254;
    }

    var z = 1.0 - x - y;
    var Y: number;
    Y = Number((brightness / 254).toFixed(2));
    var X = (Y / y) * x;
    var Z = (Y / y) * z;

    //Convert to RGB using Wide RGB D65 conversion
    var red = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
    var green = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
    var blue = X * 0.051713 - Y * 0.121364 + Z * 1.01153;

    //If red, green or blue is larger than 1.0 set it back to the maximum of 1.0
    if (red > blue && red > green && red > 1.0) {
      green = green / red;
      blue = blue / red;
      red = 1.0;
    } else if (green > blue && green > red && green > 1.0) {
      red = red / green;
      blue = blue / green;
      green = 1.0;
    } else if (blue > red && blue > green && blue > 1.0) {
      red = red / blue;
      green = green / blue;
      blue = 1.0;
    }

    //Reverse gamma correction
    red =
      red <= 0.0031308
        ? 12.92 * red
        : (1.0 + 0.055) * Math.pow(red, 1.0 / 2.4) - 0.055;
    green =
      green <= 0.0031308
        ? 12.92 * green
        : (1.0 + 0.055) * Math.pow(green, 1.0 / 2.4) - 0.055;
    blue =
      blue <= 0.0031308
        ? 12.92 * blue
        : (1.0 + 0.055) * Math.pow(blue, 1.0 / 2.4) - 0.055;

    //Convert normalized decimal to decimal
    red = Math.round(red * 255);
    green = Math.round(green * 255);
    blue = Math.round(blue * 255);

    if (isNaN(red)) red = 0;

    if (isNaN(green)) green = 0;

    if (isNaN(blue)) blue = 0;

    return [red, green, blue];
  }
  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  rgbToHex(r, g, b) {
    return (
      "#" +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }

  rgb_to_cie(red: number, green: number, blue: number) {
    //Apply a gamma correction to the RGB values, which makes the color more vivid and more the like the color displayed on the screen of your device
    var red =
      red > 0.04045
        ? Math.pow((red + 0.055) / (1.0 + 0.055), 2.4)
        : red / 12.92;
    var green =
      green > 0.04045
        ? Math.pow((green + 0.055) / (1.0 + 0.055), 2.4)
        : green / 12.92;
    var blue =
      blue > 0.04045
        ? Math.pow((blue + 0.055) / (1.0 + 0.055), 2.4)
        : blue / 12.92;

    //RGB values to XYZ using the Wide RGB D65 conversion formula
    var X = red * 0.664511 + green * 0.154324 + blue * 0.162028;
    var Y = red * 0.283881 + green * 0.668433 + blue * 0.047685;
    var Z = red * 0.000088 + green * 0.07231 + blue * 0.986039;

    //Calculate the xy values from the XYZ values
    var x = Number((X / (X + Y + Z)).toFixed(4));
    var y = Number((Y / (X + Y + Z)).toFixed(4));

    if (isNaN(x)) x = 0;

    if (isNaN(y)) y = 0;

    return [x, y];
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
}
