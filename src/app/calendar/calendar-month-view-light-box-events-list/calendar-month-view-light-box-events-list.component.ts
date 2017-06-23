import {Component, OnInit, Input, OnChanges, DoCheck, HostBinding} from '@angular/core';
import {EventForGrid} from "../../class/eventForGrid.class";
import {TooltipModule} from 'primeng/primeng';


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

  private startDay: number;
  private endDay: number;
  private color: string = "#ff0";

  @HostBinding('style.color') get getColor() {
    if (this.color !== this.eventForGrid.color) {
      this.color = this.eventForGrid.color;
    }
    return this.color;
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    this.startDay = new Date(this.eventForGrid.start_ts * 1000).getDate();

  }



}
