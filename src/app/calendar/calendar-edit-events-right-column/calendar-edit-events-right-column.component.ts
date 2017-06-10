import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-edit-events-right-column',
  templateUrl: 'calendar-edit-events-right-column.component.html',
  styleUrls: ['calendar-edit-events-right-column.component.scss']
})
export class CalendarEditEventsRightColumnComponent implements OnInit, OnChanges {
  @Input()
  private eventdata: Event;

  constructor() {
  }


  ngOnInit() {
  }
ngOnChanges() {
    console.log(this.eventdata)
}
}
/**
 * Created by LABDI on 19.05.2017.
 */
