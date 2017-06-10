import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";
// import {Router} from "@angular/router";
@Component({
  selector: 'calendar-edit-events',
  templateUrl: 'calendar-edit-events.component.html',
  styleUrls: ['calendar-edit-events.component.scss']
})
export class CalendarEditEventsComponent implements OnInit, OnChanges {
  public username: string = localStorage.getItem("userName");
  public shown = false;
  public tab = 'edit';
  public eventData:Event;

  @Input()
  private selectedEvent:number;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {

  }
  ngOnChanges() {
     this.eventsService.detailsForUser(this.username, this.selectedEvent).subscribe(val => {
       this.eventData=val;
     });
  }

}





