import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import {Comment} from "../../class/comment.class";

@Component({
  selector: 'app-event-details-tab-comments',
  templateUrl: 'event-details-tab-comments.component.html',
  styleUrls: ['event-details-tab-comments.component.scss']
})
export class EventDetailsTabCommentsComponent implements OnInit {

  public id : number;
  public showResponseDiv = false;

  @Input()
  public eventdata: Event;

  public comms : Comment[] = [];

  constructor(public route: ActivatedRoute, private commentsService: CommentsService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.commentsService.list(this.id, 0).subscribe(val => this.comms = val);
    });
  }

  ngOnInit() {
  }

}
