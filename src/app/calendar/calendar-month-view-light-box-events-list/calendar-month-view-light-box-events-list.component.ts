import {Component, OnInit, Input, OnChanges, DoCheck} from '@angular/core';
import {EventForGrid} from "../../class/eventForGrid.class";
import {TooltipModule} from 'primeng/primeng';


@Component({
  selector: 'calendar-month-view-light-box-events-list',
  templateUrl: 'calendar-month-view-light-box-events-list.component.html',
  styleUrls: ['calendar-month-view-light-box-events-list.component.scss']
})
export class CalendarMonthViewLightBoxEventsListComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  private eventForGrid: EventForGrid;
  @Input()
  public parent;
  @Input()
  private day;

  private startDay:number;
  private endDay:number;
  private color:string = "#ff0";

  getColor() {
    return {
      color: this.color
    };
  }

  constructor() {

  }


  ngOnInit() {
  }

    ngOnChanges(changes: any) {
    this.startDay = new Date(this.eventForGrid.start_ts *1000).getDate();
  }

  ngDoCheck() { // less = better !!!
    if(this.color !== this.eventForGrid.color) {
      this.color = this.eventForGrid.color;
    }
  }


}
