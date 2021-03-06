import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Comment} from "../../class/comment.class";

@Component({
  selector: 'calendar-edit-events-comment',
  templateUrl: 'calendar-edit-events-comment.component.html',
  styleUrls: ['calendar-edit-events-comment.component.scss']
})
export class CalendarEditEventsCommentComponent implements OnInit {

  @Input()
  public commentdata : Comment;

  @Input()
  public parent;

  constructor() { }

  ngOnInit() {
  }

  private getAvatarLink() {
    if (this.commentdata != undefined && this.commentdata.user_avatar != undefined) {
      return this.commentdata.user_avatar;
    }

    return "http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg";
  }

  private getUsername() {
    if(this.commentdata != undefined && this.commentdata.user_name != "")
      return this.commentdata.user_name;

    return "That Guy";
  }

  private getContent() {
    if(this.commentdata != undefined)
      return this.commentdata.comment;
  }

  private getDate() {
    if(this.commentdata == undefined) return;

    let x = new Date();
    x.setTime(this.commentdata.creat_ts * 1000);

    let mnths = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];

    return x.getDate() + " " + mnths[x.getMonth()] + " " + x.getFullYear();
  }

  protected getDateTime() {
    if(this.commentdata == undefined) return "";

    let x = new Date();
    x.setTime(this.commentdata.creat_ts * 1000);

    //16-12-2014 01:05
    return x.getDate() + "-" + (x.getMonth()+1) + "-" + x.getFullYear() + " " + x.getHours() + ":" + x.getMinutes();
  }

}
