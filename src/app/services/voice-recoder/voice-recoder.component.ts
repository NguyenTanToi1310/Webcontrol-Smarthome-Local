import { Component, Inject, OnInit } from "@angular/core";
import { PubSub } from "aws-amplify";
import { CognitoService } from "../cognito.service";
import { CustomMqttService } from '../mqtt.service';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import * as RecordRTC from "recordrtc";
// declare var MediaRecorder: any;

// interface IMqttSubscription {
//   subscription?: Subscription;
//   id: number;
// }

@Component({
  selector: "app-voice-recoder",
  templateUrl: "./voice-recoder.component.html",
  styleUrls: ["./voice-recoder.component.css"],
})
export class VoiceRecoderComponent implements OnInit {
  mqttSubscriptions: Subscription[] = [];
  subCount: number = 0;
  sessionID: string = '';
  //Lets declare Record OBJ
  record;
  //Will use this flag for toggeling recording
  recording = false;
  //URL of Blob
  url;
  error;


  public baseTopic: any;

  constructor(
    public dialogRef: MatDialogRef<VoiceRecoderComponent>,
    private readonly clientMqtt: CustomMqttService,
  ) {}

  ngOnInit() {
    // this.mqttSubscriptions[0] = this.clientMqtt.topic('hermes/asr/textCaptured').subscribe((message: IMqttMessage) => {
    //   let messageJSON = JSON.parse(message.payload.toString())
    //   console.log("message: " + messageJSON.text);
    //   if(this.sessionID.localeCompare(messageJSON.sessionId) == 0)
    //     this.clientMqtt.publish("hermes/nlu/query", JSON.stringify({
    //       "siteId": "default", 
    //       "input": messageJSON.text, 
    //       "sessionId": this.sessionID
    //     }))
    //   else
    //     console.log("ERROR: Wrong sessionId")
    // });
    // this.mqttSubscriptions[1] = this.clientMqtt.topic('hermes/intent/#').subscribe((message: IMqttMessage) => {
    //   // var messageJSON = JSON.parse(message.payload.toString())
    //   console.log("ok" + message.payload.toString());
    // });
  }

  /**
   * Start recording.
   */
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    this.sessionID = this.makeRandom(10)
    this.clientMqtt.publish("hermes/asr/startListening", JSON.stringify({"siteId": "default", "sessionId": this.sessionID}))
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  /**
   * Will be called automatically.
   */
  successCallback(stream) {
    var options = {
      mimeType: "audio/wav",
      // timeSlice: 4000,
      numberOfAudioChannels: 1,
      audioBitsPerSecond: 16000,
      // sampleRate: 44100,
      // bitrate: 128000,
      bufferSize: 2048,
      desiredSampRate: 16000,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    // this.record.stop(this.processRecording.bind(this));
    this.record.stop((blob: Blob) => {
      // this.url = URL.createObjectURL(blob);
      // console.log("url", this.url);
      
      // RecordRTC.invokeSaveAsDialog(blob, 'abc.wav') 

      blob.arrayBuffer().then((arrayBuffer) => {
        // const buffer = new Int16Array(arrayBuffer);
        // const hex = buf2hex(buffer);
        // const bin = hex2bin(hex);
        // console.log(hex);
        // console.log(bin);
        this.clientMqtt.publish("hermes/audioServer/default/audioFrame", Buffer.from(arrayBuffer))
        this.clientMqtt.publish("hermes/asr/stopListening", JSON.stringify({"siteId": "default", "sessionId": this.sessionID}))
      });
      // this.clientMqtt.publish("tantoi13", blob)

    });
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
    console.log("url", this.url);
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = "Can not play audio in your browser";
  }

  makeRandom(lengthOfCode: number) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`"
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
}

// function buf2hex(buffer) {
//   // buffer is an ArrayBuffer
//   return [...new Uint8Array(buffer)]
//     .map((x) => x.toString(16).padStart(2, "0"))
//     .join("");
// }
// function hex2bin(hex) {
//   return ("00000000" + parseInt(hex, 16).toString(2)).substr(-8);
// }

