import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngxs/store';
import { UUID } from 'angular2-uuid';
import { AddSegment } from '../../../app.state';
import { SegmentDialogComponent } from '../../../shared/components/segment-dialog/segment-dialog.component';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(SegmentDialogComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((segment) => {
      if (segment) {
        const id = UUID.UUID();
        this.store.dispatch(new AddSegment({ ...segment, tables: [], id }));
      }
    });
  }
}
