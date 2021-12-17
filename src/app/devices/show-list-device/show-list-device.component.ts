import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareBoardComponent } from '../share-board/share-board.component'
import { EditBoardComponent } from '../edit-board/edit-board.component'


@Component({
  selector: 'app-show-list-device',
  templateUrl: './show-list-device.component.html',
  styleUrls: ['./show-list-device.component.css']
})
export class ShowListDeviceComponent implements OnInit {
  public devices : any
  public ownerships: any
  public deviceAction : any

  public listdeviceIdShareRequest : any = []
  public listEmailShareRequest : any = []
  public listUIDShareRequest : any = []

  public numberDeviceShare = 0

  constructor(
    private common: CommonServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.common.getDatabaseFirebase()

    this.common.currentMessage.subscribe(res => {
      this.devices = res
      // console.log(this.devices)
    })

    this.common.ownership.subscribe(res => {
      this.ownerships = res
    })

    this.deviceAction = this.devices

    this.common.getShareHistories()
  }

  private handleDevice(device: any){
    this.deviceAction = device
  }

  private requestDeleteDevice() {
    this.common.deleteDevice(this.deviceAction)
    // console.log(this.deviceAction)
  }

  openDialog(device : any, cmd: string): void {
    const virtualDevice =  Object.assign({}, device)
    switch (cmd) {
      case 'share':
        const dialogRefShare = this.dialog.open(ShareBoardComponent, {
          width: '430px',
          data: { virtualDevice }
        });
        dialogRefShare.afterClosed().subscribe(result => { })
        break;
      case 'edit':
        const dialogRefEdit = this.dialog.open(EditBoardComponent, {
          width: '430px',
          data: { virtualDevice }
        });
        dialogRefEdit.afterClosed().subscribe(result => { })
        break;
      default:
    }
  }

  public async replyDemand(deviceId : string, command : string, index : any) {
    if (command === "accept") {
      await this.common.acceptShareDeviceDemand(deviceId)
    } else if (command === "refuse") {
      await this.common.refuseShareDeviceDemand(deviceId, this.listUIDShareRequest[index])
    }
  }
}
