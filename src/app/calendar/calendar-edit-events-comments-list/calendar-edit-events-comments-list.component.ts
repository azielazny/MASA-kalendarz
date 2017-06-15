import {Component, OnInit, Input, OnChanges, HostBinding} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import {Comment} from "../../class/comment.class";
import {Event} from "../../class/event.class";

@Component({
  selector: 'calendar-edit-events-comments-list',
  templateUrl: 'calendar-edit-events-comments-list.component.html',
  styleUrls: ['calendar-edit-events-comments-list.component.scss']
})
export class CalendarEditEventsCommentsListComponent implements OnInit, OnChanges {
  public username: string = localStorage.getItem("userName");
  public id: number;
  public showResponseDiv = false;
  private moderator: number = null;

  @Input()
  public eventdata: Event;

  public comms: Comment[] = [];

  constructor(public route: ActivatedRoute, private commentsService: CommentsService) {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.eventdata) {
      this.moderator = this.eventdata.user_id;
      this.route.params.subscribe(params => {
        this.commentsService.list(this.eventdata.event_id, 0).subscribe(val => {
          if (val.length == 0) {
            this.showResponseDiv = true;
            return;
          }

          this.comms = val;
        });
      });
    } else this.comms=[];
  }

  showResponse() {
    $('#komentarz_tresc').val('');
    $('#komentarz_username').val('').removeAttr('disabled');

    if (this.username != null)
      $('#komentarz_username').val(this.username).attr('disabled', 'disabled');

    this.showResponseDiv = true;
  }

  addComment() {
    let comment = $('#komentarz_tresc').val();
    let username = $('#komentarz_username').val();

    this.commentsService.add(this.eventdata.event_id, username, comment).subscribe(val => {
      $('#komentarz_tresc').val('');
      $('#komentarz_username').val('').removeAttr('disabled');
      this.showResponseDiv = false;

      this.commentsService.list(this.eventdata.event_id, 0).subscribe(val => {
        if (val.length == 0) {
          this.showResponseDiv = true;
          return;
        }

        this.comms = val;
      });
    });
  }

  removeComment(comment_id: number) {
    this.commentsService.remove(this.eventdata.event_id, comment_id).subscribe(val => {
      this.commentsService.list(this.eventdata.event_id, 0).subscribe(val => {
        if (val.length == 0) {
          return;
        }
        this.comms = val;
      });
    });
  }

}
