import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngxs/store';
import { Table, UpdateTable } from '../../../app.state';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';

@Component({
  selector: 'app-btn-table',
  templateUrl: './btn-table.component.html',
  styleUrls: ['./btn-table.component.css'],
})
export class BtnTableComponent {
  @Input() table: Table;

  constructor(private dialog: MatDialog, private store: Store) {}

  updateTable() {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '550px',
      data: this.table,
    });

    dialogRef.afterClosed().subscribe((table) => {
      this.store.dispatch(new UpdateTable(table));
    });
  }
}
