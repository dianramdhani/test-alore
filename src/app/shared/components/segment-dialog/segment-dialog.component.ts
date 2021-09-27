import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Segment } from '../../../app.state';

@Component({
  selector: 'app-segment-dialog',
  templateUrl: './segment-dialog.component.html',
  styleUrls: ['./segment-dialog.component.css'],
})
export class SegmentDialogComponent {
  segmentForm: FormGroup;
  showEmoji = false;

  constructor(
    public dialogRef: MatDialogRef<SegmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Segment
  ) {
    this.segmentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      icon: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.segmentForm.valid) {
      const { name, icon, description } = this.segmentForm.value;
      this.data = { ...this.data, name, icon, description };
      this.dialogRef.close(this.data);
    }
  }

  setIcon(event: any) {
    const icon = event.emoji.colons;
    this.segmentForm.patchValue({ icon });
    this.showEmoji = false;
  }
}
