import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  public listdeviceIdShareRequest : any = []
  public listEmailShareRequest : any = []
  public listUIDShareRequest : any = []
  public numberDeviceShare = 0;
  public userInfor : any;

  constructor(
    private common: CommonServiceService,
  ) {}

  ngOnInit(): void {
    this.userInfor = this.common.userInfor;

    this.common.getShareHistories()

    this.common.getShareRequest()
    this.common.numberDeviceShare$.subscribe(number =>{
      this.numberDeviceShare = number
    })
    this.common.listShareRequest.subscribe(res => {
      this.listdeviceIdShareRequest = []
      this.listEmailShareRequest = []
      this.listUIDShareRequest = []
      let list = Object.keys(res)
      list.forEach(element => {
        Object.keys(res[element]).forEach(async sharers => {
          if ((res[element])[sharers].deviceId && (res[element])[sharers].status=="waiting") {
            this.listdeviceIdShareRequest.push((res[element])[sharers].deviceId)
            this.listUIDShareRequest.push((res[element])[sharers].from)
            this.listEmailShareRequest.push((await this.common.searchByUID((res[element])[sharers].from)).email)
          }
        })
      })
    })
  }

  public async replyDemand(deviceId : string, command : string, index : any) {
    if (command === "accept") {
      await this.common.acceptShareDeviceDemand(deviceId)
    } else if (command === "refuse") {
      await this.common.refuseShareDeviceDemand(deviceId, this.listUIDShareRequest[index])
    }
  }
}
