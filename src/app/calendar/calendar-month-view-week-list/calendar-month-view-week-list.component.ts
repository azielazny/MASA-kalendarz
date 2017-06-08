import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {Router} from "@angular/router";
import {Calendar} from "../../class/calendar.class";

@Component({
  selector: 'calendar-month-view-week-list',
  templateUrl: 'calendar-month-view-week-list.component.html',
  styleUrls: ['calendar-month-view-week-list.component.scss']
})
export class CalendarMonthViewWeekListComponent implements OnInit {

  @Input()
  private day: string;



  constructor() {}

 
  ngOnInit() {
 
  }

}
