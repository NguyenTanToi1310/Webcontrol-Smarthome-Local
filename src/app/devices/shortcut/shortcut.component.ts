import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CommonServiceService } from "src/app/services/common-service.service";
import { ControllerBoardComponent } from "../controller-board/controller-board.component";
import { ShareBoardComponent } from "../share-board/share-board.component";
import { EditBoardComponent } from "../edit-board/edit-board.component";
import { AutomationBoardComponent } from "../automation-board/automation-board.component";
import { CognitoService } from "src/app/services/cognito.service";
import { BoundText } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-shortcut",
  templateUrl: "./shortcut.component.html",
  styleUrls: ["./shortcut.component.css"],
})
export class ShortcutComponent implements OnInit {
  public devices: any;
  public groups: any;

  public ownerships: any;
  public deviceAction: any;
  public listUIDShareRequest: any = [];
  public devicesData: any;

  constructor(
    private common: CommonServiceService,
    public dialog: MatDialog,
    private cognito: CognitoService
  ) {}

  ngOnInit(): void {
    this.cognito.currentGroups.subscribe((groups) => (this.groups = groups));
    this.cognito.currentDevicesData.subscribe(devicesData => this.devicesData = devicesData);

  }

  // this func recieve index of clicked BoundText, then get data of the device in this box
  private getBoxIndex(groupIndex: any, boxIndex: any) { 
    for (let deviceData of this.devicesData){
      if (deviceData.topic == this.groups[groupIndex].members[boxIndex].ieee_address) {
        this.deviceAction = deviceData;
        // console.log(deviceData);
        // console.log(this.groups);
        // console.log(this.groups[groupIndex]);
        // console.log(this.groups[groupIndex].members);
        // console.log(this.groups[groupIndex].members[boxIndex]);
      }
    }
  }

  openDialogControl(): void {
    const virtualDevice = Object.assign({}, this.deviceAction);
    const dialogRef = this.dialog.open(ControllerBoardComponent, {
      width: "430px",
      data: { virtualDevice },
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }

  openDialogAutomationBoard(): void {
    // const virtualDevice =  Object.assign({}, device)
    const dialogRef = this.dialog.open(AutomationBoardComponent, {
      width: "430px",
      // data: { virtualDevice }
    });
    dialogRef.afterClosed().subscribe((result) => {
      /* anything */
    });
  }
}
