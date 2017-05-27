import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../../class/event.class';
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-event-details-central',
  templateUrl: 'event-details-central.component.html',
  styleUrls: ['event-details-central.component.scss']
})
export class EventDetailsCentralComponent implements OnInit {
  @Input()
  public eventdata: Event;
  public events: Event[] = [];

  @Input()
  public id: number;

  constructor(public route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit() {
    this.events.push(this.eventdata);
  }

}
