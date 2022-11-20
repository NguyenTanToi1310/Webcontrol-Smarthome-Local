import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { EditAutomationConditionComponent } from '../edit-automation-condition/edit-automation-condition.component';

@Component({
  selector: 'app-automation-board',
  templateUrl: './automation-board.component.html',
  styleUrls: ['./automation-board.component.css']
})
export class AutomationBoardComponent implements OnInit {
  
  modeColorLight : any = ""
  favoriteSeason: string = "Mặc định";
  seasons: string[] = ['Mặc định', 'Tuỳ Chỉnh'];

  constructor(
    public dialogRef: MatDialogRef<AutomationBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private common: CommonServiceService,
    public dialog: MatDialog
  ) { }
  
  ngOnInit(){ 
    if(this.data.virtualDevice.type === "fan") {
      this.data.virtualDevice.fanspeed = "S2"
    } else if (this.data.virtualDevice.type === "color-light") {
      if (this.data.virtualDevice.burning) {
        this.modeColorLight = "burning"
      } else if (this.data.virtualDevice.sleep) {
        this.modeColorLight = "sleep"
      } else if (this.data.virtualDevice.rainbow) {
        this.modeColorLight = "rainbow"
      } else if (this.data.virtualDevice.party) {
        this.modeColorLight = "party"
      } else {
        this.modeColorLight = "none"  // khong co mode nao duoc chon se chon mode none
      }
    }
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  setModeColorLight(mode : string){
    switch (mode) {
      case 'sleep':
        this.modeColorLight = "sleep"
        break
      case 'burning':
        this.modeColorLight = "burning"
        break
      case 'rainbow':
        this.modeColorLight = "rainbow"
        break
      case 'party':
        this.modeColorLight = "party"
        break
      default:
        this.modeColorLight = "none"  // khong co mode nao duoc chon se sáng màu được chọn
    }
  }

  async onYesClick() {
    if (this.data.virtualDevice.type === "color-light") {
      if (this.modeColorLight === "burning") {
        this.data.virtualDevice.burning = true
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = false
      } else if (this.modeColorLight === "sleep") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = true
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = false
      } else if (this.modeColorLight === "rainbow") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = true
        this.data.virtualDevice.party = false
      } else if (this.modeColorLight === "party") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = true
      } else if (this.modeColorLight === "none") {
        this.data.virtualDevice.burning = false
        this.data.virtualDevice.sleep = false
        this.data.virtualDevice.rainbow = false
        this.data.virtualDevice.party = false
      }
    }
    await this.common.controlDevice(this.data.virtualDevice);
  }

  formatLabel(value: number) {
    return value;
  }

  openDialogEditCondition(): void {
    const dialogRef = this.dialog.open(EditAutomationConditionComponent, {
      width: '430px', 
      // height: '430px'
    });
    dialogRef.afterClosed().subscribe(result => { /* anything */ })
  }
}
