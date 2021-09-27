import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
export class SidemenuComponent implements OnInit {
  segments$ = this.store.select((state) => state.prospector);
  searchForm: FormGroup;

  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });

    this.searchForm
      .get('name')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((name: string) => {
        this.segments$ = this.store.select(ProspectorState.nameFilter(name));
      });
  }

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
