import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {Router} from "@angular/router";
import {Calendar} from "../../class/calendar.class";

@Component({
  selector: 'calendar-month-view-light-box',
  templateUrl: 'calendar-month-view-light-box.component.html',
  styleUrls: ['calendar-month-view-light-box.component.scss']
})
export class CalendarMonthViewLightBoxComponent implements OnInit {

  @Input()
  private day: Calendar;
  @Input()
  private keysactive: number;
  @Input()
  public parent;
  public mouseover = false;

  public active = false;

  constructor() {

  }

  @HostBinding('class.active') activeClass: boolean = false;

  ngOnInit() {
    if (this.day.day == this.keysactive) {
      this.activeClass = true;
    }
  }

}
