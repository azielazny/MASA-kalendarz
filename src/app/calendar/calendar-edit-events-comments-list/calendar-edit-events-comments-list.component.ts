import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import {Comment} from "../../class/comment.class";

@Component({
  selector: 'calendar-edit-events-comments-list',
  templateUrl: 'calendar-edit-events-comments-list.component.html',
  styleUrls: ['calendar-edit-events-comments-list.component.scss']
})
export class CalendarEditEventsCommentsListComponent implements OnInit {

  public id : number;
  public showResponseDiv = false;

  @Input()
  public eventdata: Event;

  public comms : Comment[] = [];

  constructor(public route: ActivatedRoute, private commentsService: CommentsService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.commentsService.list(this.id, 0).subscribe(val => {
        if(val.length == 0)
          { this.showResponseDiv = true; return; }

        this.comms = val;
      });
    });
  }

  ngOnInit() {
  }

  showResponse() {
    $('#komentarz_tresc').val('');
    $('#komentarz_username').val('').removeAttr('disabled');

    if(window.localStorage.getItem('userName') != null)
      $('#komentarz_username').val(window.localStorage.getItem('userName')).attr('disabled', 'disabled');

    this.showResponseDiv = true;
  }

  addComment() {
    let comment = $('#komentarz_tresc').val();
    let username = $('#komentarz_username').val();

    this.commentsService.add(this.id, username, comment).subscribe(val => {
      $('#komentarz_tresc').val('');
      $('#komentarz_username').val('').removeAttr('disabled');
      this.showResponseDiv = false;

      this.commentsService.list(this.id, 0).subscribe(val => {
        if(val.length == 0)
          { this.showResponseDiv = true; return; }

        this.comms = val;
      });
    });
  }

}
