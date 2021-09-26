import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.css'],
})
export class TableDialogComponent implements OnInit {
  tableForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<TableDialogComponent>) {
    this.tableForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      icon: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { name, icon, color } = this.tableForm.value;
    console.log(name, icon, color);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
