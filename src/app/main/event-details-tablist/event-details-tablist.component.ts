import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event-details-tablist',
  templateUrl: 'event-details-tablist.component.html',
  styleUrls: ['event-details-tablist.component.scss']
})
export class EventDetailsTablistComponent implements OnInit {

  @Input()
  public eventdata: Event;

  public events: Event[] = [];

  constructor() { }

  ngOnInit() {
    this.events.push(this.eventdata);
  }

}

