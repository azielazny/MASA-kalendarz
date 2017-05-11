import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-events-details-tablist',
  templateUrl: './events-details-tablist.component.html',
  styleUrls: ['./events-details-tablist.component.scss']
})
export class EventsDetailsTablistComponent implements OnInit {

  @Input()
  public eventdata: Event;

  public events: Event[] = [];

  constructor() { }

  ngOnInit() {
    this.events.push(this.eventdata);
  }

}

