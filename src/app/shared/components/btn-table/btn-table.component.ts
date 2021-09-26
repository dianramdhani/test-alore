import { Component, Input, OnInit } from '@angular/core';
import { Segment } from '../../../app.state';

@Component({
  selector: 'app-btn-table',
  templateUrl: './btn-table.component.html',
  styleUrls: ['./btn-table.component.css'],
})
export class BtnTableComponent implements OnInit {
  /**
   * @Todo ganti jadi table
   */
  @Input() segment: Segment;

  constructor() {}

  ngOnInit() {
    console.log(this.segment);
  }
}
