import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngxs/store';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';
import { AddTable } from '../../../app.state';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.component.html',
  styleUrls: ['./btn-plus.component.css'],
})
export class BtnPlusComponent {
  @Input() segmentId: any;

  constructor(private dialog: MatDialog, private store: Store) {}

  addTable() {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((table) => {
      if (table) {
        this.store.dispatch(
          new AddTable({
            segmentId: this.segmentId,
            table,
          })
        );
      }
    });
  }
}
