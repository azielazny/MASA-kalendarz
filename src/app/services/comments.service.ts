import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Comment} from "../class/comment.class";

@Injectable()
export class CommentsService {
  private url = "https://masa.oustish.pl/comments";

  constructor(private http: Http) {};

  list(eventid: number, lastknowncid : number = 0): Observable<Comment[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/list/" + eventid + "/" + lastknowncid, options)
      .map(this.extractCommentsList);
  }

  private extractCommentsList(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.comments;
    else
      return {};
  }
}
