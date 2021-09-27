import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngxs/store';
import { RemoveTable, Table } from '../../../app.state';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.css'],
})
export class TableDialogComponent implements OnInit {
  tableForm: FormGroup;
  colorPalette: string[];
  showEmoji = false;

  constructor(
    public dialogRef: MatDialogRef<TableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { table: Table; segmentId: any },
    private store: Store
  ) {
    this.colorPalette = [
      'rgba(207, 223, 255, 1)',
      'rgba(156, 199, 255, 1)',
      'rgba(45, 127, 249, 1)',
      'rgba(0, 103, 255, 1)',
      'rgba(0, 84, 209, 1)',

      'rgba(208, 240, 253, 1)',
      'rgba(119, 209, 243, 1)',
      'rgba(24, 191, 255, 1)',
      'rgba(64, 131, 172, 1)',
      'rgba(11, 118, 183, 1)',

      'rgba(194, 245, 233, 1)',
      'rgba(114, 221, 195, 1)',
      'rgba(32, 217, 210, 1)',
      'rgba(123, 200, 195, 1)',
      'rgba(6, 160, 155, 1)',

      'rgba(255, 179, 200, 1)',
      'rgba(255, 140, 173, 1)',
      'rgba(255, 140, 173, 1)',
      'rgba(255, 0, 73, 1)',
      'rgba(218, 2, 64, 1)',

      'rgba(255, 227, 175, 1)',
      'rgba(255, 214, 140, 1)',
      'rgba(255, 197, 92, 1)',
      'rgba(253, 178, 43, 1)',
      'rgba(232, 149, 0, 1)',

      'rgba(255, 159, 242, 1)',
      'rgba(254, 103, 233, 1)',
      'rgba(246, 56, 220, 1)',
      'rgba(255, 0, 220, 1)',
      'rgba(214, 0, 184, 1)',

      'rgba(255, 181, 152, 1)',
      'rgba(255, 158, 121, 1)',
      'rgba(255, 120, 68, 1)',
      'rgba(255, 71, 0, 1)',
      'rgba(197, 55, 0, 1)',

      'rgba(175, 181, 255, 1)',
      'rgba(142, 150, 255, 1)',
      'rgba(107, 118, 255, 1)',
      'rgba(49, 64, 255, 1)',
      'rgba(0, 19, 255, 1)',

      'rgba(131, 204, 139, 1)',
      'rgba(97, 199, 108, 1)',
      'rgba(32, 201, 51, 1)',
      'rgba(0, 181, 20, 1)',
      'rgba(51, 138, 23, 1)',

      'rgba(238, 238, 238, 1)',
      'rgba(204, 204, 204, 1)',
      'rgba(172, 172, 172, 1)',
      'rgba(102, 102, 102, 1)',
      'rgba(68, 68, 68, 1)',
    ];
  }

  ngOnInit() {
    if (this.data) {
      this.tableForm = new FormGroup({
        name: new FormControl(this.data.table.name, [Validators.required]),
        icon: new FormControl(this.data.table.icon, [Validators.required]),
        color: new FormControl(this.data.table.color, [Validators.required]),
      });
    } else {
      this.tableForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        icon: new FormControl('', [Validators.required]),
        color: new FormControl('', [Validators.required]),
      });
    }
  }

  onSubmit() {
    if (this.tableForm.valid) {
      const { name, icon, color } = this.tableForm.value;
      let table: Table;
      if (this.data) {
        table = { ...this.data.table, name, icon, color };
      } else {
        table = { name, icon, color };
      }
      this.dialogRef.close(table);
    }
  }

  onRemove() {
    this.store.dispatch(
      new RemoveTable({
        segmentId: this.data.segmentId,
        tableId: this.data.table.id,
      })
    );
    this.dialogRef.close();
  }

  setColor(color: string) {
    this.tableForm.patchValue({ color });
  }

  setIcon(event: any) {
    const icon = event.emoji.colons;
    this.tableForm.patchValue({ icon });
    this.showEmoji = false;
  }
}
