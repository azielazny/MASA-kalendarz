import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event-details-tab-enroll',
  templateUrl: 'event-details-tab-enroll.component.html',
  styleUrls: ['event-details-tab-enroll.component.scss']
})
export class EventDetailsTabEnrollComponent implements OnInit {

  @Input()
  public eventdata: Event;

  constructor() { }

  ngOnInit() {
  }

}
