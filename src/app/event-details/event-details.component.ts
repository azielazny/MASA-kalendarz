import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Event } from '../class/event.class';
import {EventsService} from "../services/events.service";


@Component({
  selector: 'app-event-details',
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public events: Event[] = [];
  public id: number;

  constructor(private router: Router, private eventsService: EventsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.eventsService.details(this.id).subscribe(value => this.eventDataPresent(value));
  }

  eventDataPresent(value: Event) {
    this.events.push(value);
  }

}
