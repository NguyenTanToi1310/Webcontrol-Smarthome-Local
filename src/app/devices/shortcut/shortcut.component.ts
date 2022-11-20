import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CommonServiceService } from "src/app/services/common-service.service";
import { ControllerBoardComponent } from "../controller-board/controller-board.component";
import { ShareBoardComponent } from "../share-board/share-board.component";
import { EditBoardComponent } from "../edit-board/edit-board.component";
import { AutomationBoardComponent } from "../automation-board/automation-board.component";

@Component({
  selector: "app-shortcut",
  templateUrl: "./shortcut.component.html",
  styleUrls: ["./shortcut.component.css"],
})
export class ShortcutComponent implements OnInit {
  public devices: any;

  public ownerships: any;
  public deviceAction: any;
  public listUIDShareRequest: any = [];

  constructor(private common: CommonServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.common.getDatabaseFirebase();
    this.common.currentMessage.subscribe((res) => {
      this.devices = res;
    });

    this.common.ownership.subscribe((res) => {
      this.ownerships = res;
    });
    this.deviceAction = this.devices;
    this.common.getShareHistories();
  }

  openDialogControl(device: any): void {
    const virtualDevice = Object.assign({}, device);
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
      width: '430px',
      // data: { virtualDevice }
    });
    dialogRef.afterClosed().subscribe(result => { /* anything */ })
  }
}
