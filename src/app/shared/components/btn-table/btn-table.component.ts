import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../../app.state';

@Component({
  selector: 'app-btn-table',
  templateUrl: './btn-table.component.html',
  styleUrls: ['./btn-table.component.css'],
})
export class BtnTableComponent implements OnInit {
  @Input() table: Table;

  constructor() {}

  ngOnInit() {}
}
