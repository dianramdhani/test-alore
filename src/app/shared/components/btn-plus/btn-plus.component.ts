import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.component.html',
  styleUrls: ['./btn-plus.component.css'],
})
export class BtnPlusComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
