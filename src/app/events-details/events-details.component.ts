import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Event } from '../class/event.class';
import {EventsService} from "../services/events.service";


@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  public ev: Event;
  public id: number;

  constructor(private router: Router, private eventsService: EventsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.eventsService.details(this.id).subscribe(val => { this.ev = val; });
    });
  }

}
