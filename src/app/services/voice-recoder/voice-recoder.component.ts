import { Component, Inject, OnInit } from "@angular/core";
import { PubSub } from "aws-amplify";
import { CognitoService } from "../cognito.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import * as RecordRTC from "recordrtc";
// declare var MediaRecorder: any;
@Component({
  selector: "app-voice-recoder",
  templateUrl: "./voice-recoder.component.html",
  styleUrls: ["./voice-recoder.component.css"],
})
export class VoiceRecoderComponent implements OnInit {
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
  ) {}

  ngOnInit() {
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
      numberOfAudioChannels: 1,
      audioBitsPerSecond: 16000,
      sampleRate: 44100,
      bitrate: 128000,
      bufferSize: 1024,
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
    this.record.stop((blob) => {
      this.url = URL.createObjectURL(blob);
      console.log("url", this.url);
      
      RecordRTC.invokeSaveAsDialog(blob, 'abc.wav') 

      // blob.arrayBuffer().then((arrayBuffer) => {
      //   const buffer = arrayBuffer;
      //   const hex = buf2hex(buffer);
      //   const bin = hex2bin(hex);
      //   console.log(hex);
      //   console.log(bin);
      //   PubSub.publish("tantoi13", arrayBuffer)
      // });
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

