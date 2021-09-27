import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngxs/store';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';
import { UUID } from 'angular2-uuid';
import { AddTable, Table } from '../../../app.state';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.component.html',
  styleUrls: ['./btn-plus.component.css'],
})
export class BtnPlusComponent implements OnInit {
  @Input() segmentId: any;

  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '550px',
      data: { id: UUID.UUID() } as Table,
    });

    dialogRef.afterClosed().subscribe((table) => {
      this.store.dispatch(new AddTable({ segmentId: this.segmentId, table }));
    });
  }
}
