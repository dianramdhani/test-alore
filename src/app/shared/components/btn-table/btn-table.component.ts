import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngxs/store';
import { Table, UpdateTable } from '../../../app.state';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-btn-table',
  templateUrl: './btn-table.component.html',
  styleUrls: ['./btn-table.component.css'],
})
export class BtnTableComponent {
  @Input() table: Table;
  @Input() segmentId: any;

  constructor(private dialog: MatDialog, private store: Store) {}

  updateTable() {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '550px',
      data: { table: this.table, segmentId: this.segmentId },
    });

    dialogRef.afterClosed().subscribe((table) => {
      if (table !== undefined && !_.isEqual(table, this.table)) {
        this.store.dispatch(
          new UpdateTable({ table, segmentId: this.segmentId })
        );
      }
    });
  }
}
