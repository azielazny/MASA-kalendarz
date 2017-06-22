import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';
import {User} from "../../class/user.class";
import {Attendant} from "../../class/attendant.class";


@Component({
  selector: 'calendar-edit-events-users-list',
  templateUrl: 'calendar-edit-events-users-list.component.html',
  styleUrls: ['calendar-edit-events-users-list.component.scss']
})
export class CalendarEditEventsUsersListComponent  {
  @Input()
  private user: Attendant;

  constructor() {
  }



}
