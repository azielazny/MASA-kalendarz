import {Component, OnInit, Input, HostBinding, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Calendar} from "../../class/calendar.class";
import {EventForGrid} from "../../class/eventForGrid.class";

@Component({
  selector: 'calendar-month-view-light-box',
  templateUrl: 'calendar-month-view-light-box.component.html',
  styleUrls: ['calendar-month-view-light-box.component.scss']
})
export class CalendarMonthViewLightBoxComponent implements OnInit, OnChanges {

  @Input()
  private day: Calendar;
  @Input()
  private actualDate: number;
  @Input()
  public parent;
  @Input()
  private eventsListForGrid:EventForGrid[];
  public mouseover = false;

  public active = false;

  constructor() {

  }

  @HostBinding('class.active') activeClass: boolean = false;

  ngOnInit() {
    if (this.day.day == this.actualDate) {
      this.activeClass = true;
    }
  }
  ngOnChanges() {
    // console.log(this.eventsListForGrid)
  }


}
