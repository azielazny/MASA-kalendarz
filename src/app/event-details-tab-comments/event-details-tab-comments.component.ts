import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event-details-tab-comments',
  templateUrl: 'event-details-tab-comments.component.html',
  styleUrls: ['event-details-tab-comments.component.scss']
})
export class EventDetailsTabCommentsComponent implements OnInit {

  @Input()
  public eventdata: Event;

  constructor() { }

  ngOnInit() {
  }

}
