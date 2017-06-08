import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Calendar} from "../../class/calendar.class";

@Component({
  selector: 'calendar-month-view-dark-box',
  templateUrl: 'calendar-month-view-dark-box.component.html',
  styleUrls: ['calendar-month-view-dark-box.component.scss']
})
export class CalendarMonthViewDarkBoxComponent implements OnInit {

  @Input()
  public day: Calendar;
  constructor() {}


  ngOnInit() {
  }

}
