import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Comment} from "../class/comment.class";

@Injectable()
export class CommentsService {
  private url = "https://masa.ousti.sh/comments";

  constructor(private http: Http) {};

  list(eventid: number, lastknowncid : number = 0): Observable<Comment[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/list/" + eventid + "/" + lastknowncid, options)
      .map(this.extractCommentsList);
  }

  add(eventid: number, username: string, comment: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    let data = {
      username: username,
      comment: comment
    };

    return this.http.post(this.url + "/add/" + eventid, JSON.stringify(data), options)
      .map(this.extractStatus);
  }

  private extractCommentsList(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.comments;
    else
      return {};
  }

  private extractStatus(res: Response) {
    let body = res.json();

    return (body.code === 200);
  }
}
