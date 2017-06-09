import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {UsersService} from "../../services/users.service";
// import {Router} from "@angular/router";
@Component({
  selector: 'calendar-edit-events',
  templateUrl: 'calendar-edit-events.component.html',
  styleUrls: ['calendar-edit-events.component.scss']
})
export class CalendarEditEventsComponent implements OnInit, OnChanges {

  constructor() {
  }

  @Input()
  private selectedEvent;

  public shown = false;
  public tab = 'edit';

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.selectedEvent)
  }

}





