import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-month-view',
  templateUrl: 'calendar-month-view.component.html',
  styleUrls: ['calendar-month-view.component.scss']
})
export class CalendarMonthViewComponent implements OnInit {

  public keys_pre = "ddd".split('');
  public keys = "llllllllllllllllllllllllllllll".split('');
  public keys_post = "dd".split('');

  @Input()
  public parent;

  constructor() {}

  openRightColumn(index) {
    this.parent.rightColumn.shown = true;
    this.parent.rightColumn.day = index;
  }

  ngOnInit() {

  }

}
