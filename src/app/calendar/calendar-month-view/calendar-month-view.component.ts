import {Component, OnInit, Input, ViewChild, ViewChildren} from '@angular/core';
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

  @ViewChildren('lightBoxes')
  public lightBoxes;

  constructor() {}

  openRightColumn(index) {
    this.parent.rightColumn.shown = true;
    this.parent.rightColumn.day = index;

    this.clearActiveClass();
    this.lightBoxes.toArray()[index - 1].active = true;
  }

  clearActiveClass() {
    for(let x of this.lightBoxes.toArray())
      x.active = false;
  }

  ngOnInit() {

  }

}
