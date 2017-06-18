import {Component, OnInit, Input, HostBinding, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Calendar} from "../../class/calendar.class";
import {EventForGrid} from "../../class/eventForGrid.class";
import {log} from "util";
import {Observable} from "rxjs";

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
  private eventsListForGrid: EventForGrid[];
  public mouseover = false;

  public active = false;

  constructor() {

  }

  @HostBinding('class.active') activeClass: boolean = false;

  ngOnInit() {
    if (this.day.day == this.actualDate) {
      this.activeClass = true;
    }
    // this.eventsListForGridByDay();
    // console.log(this.x)

  }

  private x: EventForGrid;

  ngOnChanges() {
    // console.log(this.eventsListForGrid)
    this.eventsListForGridByDay();
    console.log(this.x)
  }

  eventsListForGridByDay() {
    // this.x = [];
    // let startDate = new Date(this.year, this.month, day).getTime() / 1000;
    // if (this.eventsListForGrid) {
      this.eventsListForGrid.map(val =>{console.log(val);this.x= val}
      );
// console.log(this.x);
//     return this.x;
//     }
  }


}
