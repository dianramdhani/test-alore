import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngxs/store';
import { RemoveSegment, Segment } from '../../../app.state';

@Component({
  selector: 'app-segment-dialog',
  templateUrl: './segment-dialog.component.html',
  styleUrls: ['./segment-dialog.component.css'],
})
export class SegmentDialogComponent implements OnInit {
  segmentForm: FormGroup;
  showEmoji = false;

  constructor(
    public dialogRef: MatDialogRef<SegmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Segment,
    private store: Store
  ) {}

  ngOnInit() {
    if (this.data) {
      this.segmentForm = new FormGroup({
        name: new FormControl(this.data.name, [Validators.required]),
        icon: new FormControl(this.data.icon, [Validators.required]),
        description: new FormControl(this.data.description, [
          Validators.required,
        ]),
      });
    } else {
      this.segmentForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        icon: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
      });
    }
  }

  onSubmit() {
    if (this.segmentForm.valid) {
      const { name, icon, description } = this.segmentForm.value;
      this.data = { ...this.data, name, icon, description };
      this.dialogRef.close(this.data);
    }
  }

  onRemove() {
    this.store.dispatch(new RemoveSegment(this.data.id));
    this.dialogRef.close();
  }

  setIcon(event: any) {
    const icon = event.emoji.colons;
    this.segmentForm.patchValue({ icon });
    this.showEmoji = false;
  }
}
