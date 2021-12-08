import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { ControllerBoardComponent } from '../controller-board/controller-board.component';

@Component({
  selector: 'app-information-device',
  templateUrl: './information-device.component.html',
  styleUrls: ['./information-device.component.css']
})

export class InformationDeviceComponent implements OnInit {
  public devices : any

  constructor( 
    private common: CommonServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.common.getDatabaseFirebase()
    this.common.currentMessage.subscribe(res => {
      this.devices = res;
    })
  }

  openDialog(device : any): void {
    const virtualDevice =  Object.assign({}, device)
    const dialogRef = this.dialog.open(ControllerBoardComponent, {
      width: '430px',
      data: { virtualDevice }
    });
    dialogRef.afterClosed().subscribe(result => { /* anything */ })
  }
}