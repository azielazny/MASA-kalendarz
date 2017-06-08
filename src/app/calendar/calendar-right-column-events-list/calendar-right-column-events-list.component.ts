import {Component, OnInit, Input} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";

@Component({
  selector: 'calendar-right-column-events-list',
  templateUrl: 'calendar-right-column-events-list.component.html',
  styleUrls: ['calendar-right-column-events-list.component.scss']
})
export class CalendarRightColumnEventsListComponent implements OnInit {
  public username: string = localStorage.getItem("userName");

  @Input()
  private eventdata: Event;

  constructor() {}
  @Input()
  public parent;
  ngOnInit() {

  }

}
