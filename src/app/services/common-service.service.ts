import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import * as qs from 'query-string';
import { HttpClient } from '@angular/common/http';

import {firebase} from '@firebase/app';
import '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  public userInfor = ""
  public isExpireDateToken: boolean
  public deviceList : any = []

  // lay du lieu cua tung thiet bi khong co quyen so huu (khong co guest hay host)
  mess = new BehaviorSubject<any>([])
  currentMessage = this.mess.asObservable()

  // lay quyen so huu thiet bị (bao gom ten thiet bi va quyen so huu)
  permissionDevice = new BehaviorSubject<any>([])
  ownership = this.permissionDevice.asObservable()

  // lay danh sach ai share va share den ai
  sharePerson = new BehaviorSubject<any>([])
  listShareHistories = this.sharePerson.asObservable()

  // lay danh sach nguoi da duoc share
  reciveSharePerson = new BehaviorSubject<any>([])
  listShareRequest = this.reciveSharePerson.asObservable()

  // lay so thiet bi duoc share den ai do /////////////////////////////////////////////////////////
  numberDeviceShare$ = new BehaviorSubject<number>(0);
  numberDeviceShare = 0;
  listdeviceIdShareRequest: any[];
  
  // //////////////////////////////////////////////////////////////////////////////////////////////

  constructor(
    private router: Router,
    // private db: AngularFireDatabase,
    // private shareHistories: AngularFireDatabase,
    // private shareRequest: AngularFireDatabase,
    private http: HttpClient,
    
  ) { 
    // this.numberDeviceShare$.next(10);
  }

  public async loginPage() {         // chuyen huong den trang dang nhap
    this.router.navigate(['/login'])
  }

  public decodeAccessToken(token : string) {  // giai ma token lay thong tin
    const helper = new JwtHelperService();
    this.userInfor = helper.decodeToken(token)
    this.isExpireDateToken = helper.isTokenExpired(token)
    const expireDateToken = helper.getTokenExpirationDate(token)
    // console.log(this.userInfor);
  }

  // public async getDatabaseFirebase() {      // lay thong tin thiet bi tu user
  //   await this.db.object('ownerships/' + this.userInfor['user_id']).snapshotChanges().subscribe(action => {
  //     if (!!action.payload.val()) {
  //       let devices = Object.keys(action.payload.val()); // cho nay chi lay key
  //       let permission = []
  //       devices.forEach(emlement => {
  //         this.deviceList = [];
  //         this.db.object('devices/' + emlement).snapshotChanges()
  //         .subscribe((device: any) => {
  //           let check = true;
  //           for (let i = 0; i < this.deviceList.length; i++) {
  //             if (device.payload.val().deviceId === this.deviceList[i].deviceId) {
  //               this.deviceList[i] = device.payload.val()
  //               check = false;
  //             }
  //           }
  //           if (check) {
  //             this.deviceList.push(device.payload.val())
  //             // console.log(device.payload.val().deviceId)
  //             for (let i=0; i<(Object.keys(action.payload.val())).length; i++) {
  //               if ((Object.keys(action.payload.val()))[i] === device.payload.val().deviceId) {
  //                 permission.push((Object.values(action.payload.val()))[i])
  //               }
  //             };
  //           }
  //         })
  //       })
  //       // console.log("Permission-Common: ", permission);
  //       // console.log("DeviceList-Common: ", this.deviceList);
  //       this.mess.next(this.deviceList)
  //       this.permissionDevice.next(permission)
  //     }
  //   })
  // }

  // public async searchByEmailUser(email){
  //   const usersRef = await firebase.firestore().collection('users');
  //   const usersSnapshot = await usersRef.orderBy('email').startAt(email).endAt(email + '\uf8ff').get()
  //   const searchResult = []

  //   if(!usersSnapshot.empty) {
  //     usersSnapshot.forEach(userRecord => {
  //       searchResult.push({
  //         uid: userRecord.data().uid,
  //         email: userRecord.data().email,
  //         displayName: userRecord.data().displayName,
  //         phoneNumber: userRecord.data().phoneNumber,
  //         photoURL: userRecord.data().photoURL,
  //       });
  //     })
  //     // console.log("searchResult: ", searchResult)
  //     if (searchResult[0].uid !== null) {
  //       return searchResult;
  //     }
  //   }
  //   return null;
  // }

  // public async searchByUID(UID){
  //   const usersRef = await firebase.firestore().collection('users')
  //   const usersSnapshot = await usersRef.orderBy('uid').startAt(UID).endAt(UID + '\uf8ff').get()
  //   const searchResult = []
  //   if(!usersSnapshot.empty) {
  //     usersSnapshot.forEach(userRecord => {
  //       searchResult.push({
  //         uid: userRecord.data().uid,
  //         email: userRecord.data().email,
  //         displayName: userRecord.data().displayName,
  //         phoneNumber: userRecord.data().phoneNumber,
  //         photoURL: userRecord.data().photoURL,
  //       });
  //     })
  //     if (searchResult[0].email !== null) {
  //       return searchResult[0];
  //     }
  //   }
  //   return null;
  // }

  // public async controlDevice( device : any ) {
  //   if (device.type !== 'sensor-th') {
  //     let controlURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/control'
  //     let deviceArray = [];   // push into array - use JSON.stringify
  //     deviceArray.push(device);
  //     const data = {
  //       commands: JSON.stringify(deviceArray)
  //     }
  //     //
  //     console.log(typeof data)
  //     console.log(data.commands)
  //     //
  //     return await this.http.post<unknown>(controlURL, data).subscribe(res => { /* console.log(res) */ })
  //   } else if (device.type == 'sensor-th') {
  //     let controlURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/activesensor'
  //     return await this.http.post<unknown>(controlURL, "").subscribe(res => { /*console.log(res) */ })
  //   }
  // }

  // public async deleteDevice( device : any ) {
  //   let deleteURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/deletedevice'
  //   const data = {
  //     deviceId: device.deviceId
  //   }
  //   return await this.http.post<unknown>(deleteURL, data).subscribe(res => { /* console.log(res) */ });
  // }

  // public async editDevice(deviceId, en_nickname, ot_nickname, switch_type, PIN) {
  //   let editURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/editdevice'
  //   const data = {
  //     deviceId,
  //     en_nickname,
  //     ot_nickname,
  //     switch_type,
  //     PIN
  //   }
  //   return new Promise((resolve, reject) => {
  //     this.http.post<unknown>(editURL, data).subscribe( res => {
  //       resolve(res)
  //     })
  //   })
  // }

  // public async shareDevice( uidShare : string, deviceId : string ) {
  //   let shareURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/sharedevice'
  //   const data = {
  //       deviceId,
  //       uidShare,
  //   }
  //   return new Promise((resolve, reject) => {
  //     this.http.post<unknown>(shareURL, data).subscribe( res => {
  //       resolve(res)
  //     });
  //   })
  // }

  // public async revokeDevice( uidShare : string, deviceId : string ) {
  //   let revokeURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/revokesharerequest'
  //   const data = {
  //     deviceId,
  //     uidShare
  //   }
  //   return new Promise((resolve, reject) => {
  //     this.http.post<unknown>(revokeURL, data).subscribe( res => {
  //       resolve(res)
  //     });
  //   })
  // }

  // public async acceptShareDeviceDemand( deviceId : string ) {
  //   let acceptURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/acceptsharerequest'
  //   const data = {
  //     deviceId
  //   }
  //   return await this.http.post<unknown>(acceptURL, data).subscribe(res => { /* console.log(res) */ })
  // }

  // public async refuseShareDeviceDemand( deviceId : string, uidHost : string ) {
  //   let rejectURL = 'https://us-central1-smarthome-quoctoi-bfa7d.cloudfunctions.net/fulfillment/user/rejectsharerequest'
  //   const data = {
  //     uidHost,
  //     deviceId
  //   }
  //   return await this.http.post<unknown>(rejectURL, data).subscribe(res => { /* console.log(res) */ })
  // }

  // public async getShareHistories() {
  //   await this.shareHistories.object('sharehistories/' + this.userInfor['user_id']).snapshotChanges().subscribe(personShareHistories => {
  //     let personShare : any = []
  //     if(!!personShareHistories.payload.val()) {
  //       personShare.push(Object(personShareHistories.payload.val()))
  //     }
  //     this.sharePerson.next(personShare);
  //   })
  // }

  // public async getShareRequest() {
  //   await this.shareRequest.object('sharerequests/' + this.userInfor['user_id']).snapshotChanges().subscribe(personShareRequest => {
  //     let reciveSharePerson : any = []
  //     if(!!personShareRequest.payload.val()) {
  //       reciveSharePerson.push(Object(personShareRequest.payload.val()))
  //       this.numberDeviceShare=0;
  //       Object(personShareRequest.payload.val()).forEach(element => {
  //         // console.log(element.status)
  //         if(element.status=="waiting"){
  //           this.numberDeviceShare = this.numberDeviceShare+1;
  //           console.log(this.numberDeviceShare)
  //         }
  //       })          
  //     }  
  //     this.reciveSharePerson.next(reciveSharePerson)
  //     this.numberDeviceShare$.next(this.numberDeviceShare)
  //   })
  //   // this.numberDeviceShare = this.listdeviceIdShareRequest.length
  //   // this.numberDeviceShare$.next(this.numberDeviceShare)
  // }  
}


