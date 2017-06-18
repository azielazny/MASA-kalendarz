import {Component, OnInit, Input, HostBinding, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Calendar} from "../../class/calendar.class";
import {EventForGrid} from "../../class/eventForGrid.class";
import {Category} from "../../class/category.class";

@Component({
  selector: 'calendar-month-view-light-box-events-list',
  templateUrl: 'calendar-month-view-light-box-events-list.component.html',
  styleUrls: ['calendar-month-view-light-box-events-list.component.scss']
})
export class CalendarMonthViewLightBoxEventsListComponent implements OnInit, OnChanges {

  @Input()
  private eventForGrid: EventForGrid;
  @Input()
  public parent;
  @Input()
  private day;

  constructor() {

  }


  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.day)
  }


}
