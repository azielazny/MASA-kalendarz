import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import {Comment} from "../../class/comment.class";
import {Event} from "../../class/event.class";

@Component({
  selector: 'app-event-details-tab-comments',
  templateUrl: 'event-details-tab-comments.component.html',
  styleUrls: ['event-details-tab-comments.component.scss']
})
export class EventDetailsTabCommentsComponent implements OnInit, OnChanges {

  public id : number;
  public showResponseDiv = false;
  private moderator: number = null;

  @Input()
  public eventdata: Event;

  public comms : Comment[] = [];

  constructor(public route: ActivatedRoute, private commentsService: CommentsService) {

  }

  ngOnInit() {
  }
  ngOnChanges() {
    if(this.eventdata) {
      this.moderator = this.eventdata.user_id;
      this.route.params.subscribe(params => {
        this.id = params['id'];

        this.commentsService.list(this.id, 0).subscribe(val => {
          if(val.length == 0)
          { this.showResponseDiv = true; return; }

          this.comms = val;
        });
      });
    }
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
