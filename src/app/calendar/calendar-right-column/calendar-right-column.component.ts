import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-right-column',
  templateUrl: 'calendar-right-column.component.html',
  styleUrls: ['calendar-right-column.component.scss']
})
export class CalendarRightColumnComponent implements OnInit {

  constructor() {}

  @Input()
  public parent;

  public day = 0;
  public shown = false;

  addNewEvent() {
    this.parent.editEvents.shown = true;
  }

  ngOnInit() {

  }

}
