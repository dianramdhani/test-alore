import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  AddSegment,
  ProspectorState,
  Segment,
  UpdateSegment,
} from '../../../app.state';
import { SegmentDialogComponent } from '../../../shared/components/segment-dialog/segment-dialog.component';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  @Select(ProspectorState) segments$: Observable<Segment[]>;

  constructor(public dialog: MatDialog, private store: Store) {}

  addSegment() {
    const dialogRef = this.dialog.open(SegmentDialogComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((segment) => {
      if (segment) {
        this.store.dispatch(new AddSegment({ ...segment, tables: [] }));
      }
    });
  }

  updateSegment(segment: Segment) {
    const dialogRef = this.dialog.open(SegmentDialogComponent, {
      width: '550px',
      data: segment,
    });

    dialogRef.afterClosed().subscribe((segment) => {
      if (segment) {
        this.store.dispatch(new UpdateSegment(segment));
      }
    });
  }
}
