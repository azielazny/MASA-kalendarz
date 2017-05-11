import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-events-details-comment',
  templateUrl: './events-details-comment.component.html',
  styleUrls: ['./events-details-comment.component.scss']
})
export class EventsDetailsCommentComponent implements OnInit {

  @Input()
  public eventdata: Event;

  constructor() { }

  ngOnInit() {
  }

}
