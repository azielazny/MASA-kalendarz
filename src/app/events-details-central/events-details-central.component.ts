import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../class/event.class';
import {Router, ActivatedRoute} from "@angular/router";
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-events-details-central',
  templateUrl: './events-details-central.component.html',
  styleUrls: ['./events-details-central.component.scss']
})
export class EventsDetailsCentralComponent implements OnInit {
  @Input()
  public eventdata: Event;

  @Input()
  public id: number;

  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(this.eventdata);
  }

}
