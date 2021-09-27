import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngxs/store';
import { UUID } from 'angular2-uuid';
import { AddSegment } from '../../../app.state';

@Component({
  selector: 'app-segment-dialog',
  templateUrl: './segment-dialog.component.html',
  styleUrls: ['./segment-dialog.component.css'],
})
export class SegmentDialogComponent implements OnInit {
  segmentForm: FormGroup;
  showEmoji = false;

  // @Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor(
    public dialogRef: MatDialogRef<SegmentDialogComponent>,
    private store: Store
  ) {
    this.segmentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      icon: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.segmentForm.valid) {
      const { name, icon, description } = this.segmentForm.value;
      const id = UUID.UUID();
      this.store.dispatch(
        new AddSegment({ name, icon, description, tables: [], id })
      );
      this.dialogRef.close();
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  setIcon(event: any) {
    const icon = event.emoji.colons;
    this.segmentForm.patchValue({ icon });
    this.showEmoji = false;
  }
}
