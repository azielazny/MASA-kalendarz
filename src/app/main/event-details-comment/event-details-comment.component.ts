import {Component, OnInit, Input} from '@angular/core';
import {Comment} from "../../class/comment.class";

@Component({
  selector: 'event-details-comment',
  templateUrl: 'event-details-comment.component.html',
  styleUrls: ['event-details-comment.component.scss']
})
export class EventDetailsCommentComponent implements OnInit {

  @Input()
  public commentdata : Comment;

  @Input()
  public parent;

  constructor() { }

  ngOnInit() {
  }

  getAvatarLink() {
    if (this.commentdata != undefined && this.commentdata.user_avatar != undefined) {
      return this.commentdata.user_avatar;
    }

    return "http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg";
  }

  getUsername() {
    if(this.commentdata != undefined && this.commentdata.user_name != "")
      return this.commentdata.user_name;

    return "That Guy";
  }

  getContent() {
    if(this.commentdata != undefined)
      return this.commentdata.comment;
  }

  getDate() {
    if(this.commentdata == undefined) return;

    let x = new Date();
    x.setTime(this.commentdata.creat_ts * 1000);

    let mnths = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];

    return x.getDate() + " " + mnths[x.getMonth()] + " " + x.getFullYear();
  }

  getDateTime() {
    if(this.commentdata == undefined) return "";

    let x = new Date();
    x.setTime(this.commentdata.creat_ts * 1000);

    //16-12-2014 01:05
    return x.getDate() + "-" + (x.getMonth()+1) + "-" + x.getFullYear() + " " + x.getHours() + ":" + x.getMinutes();
  }

}
