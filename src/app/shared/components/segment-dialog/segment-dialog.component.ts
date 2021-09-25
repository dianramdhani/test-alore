import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-segment-dialog',
  templateUrl: './segment-dialog.component.html',
  styleUrls: ['./segment-dialog.component.css'],
})
export class SegmentDialogComponent implements OnInit {
  segmentForm: FormGroup;

  // @Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor(public dialogRef: MatDialogRef<SegmentDialogComponent>) {
    this.segmentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      icon: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { name, icon, description } = this.segmentForm.value;
    console.log(name, icon, description);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
