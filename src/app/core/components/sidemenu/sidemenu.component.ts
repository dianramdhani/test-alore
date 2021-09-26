import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SegmentDialogComponent } from '../../../shared/components/segment-dialog/segment-dialog.component';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(SegmentDialogComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
