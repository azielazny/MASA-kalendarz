import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private url = "https://masa.oustish.pl/users";

  constructor(private http: Http) {}

  login(provider: string = "google", user_id: string): Observable<number> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    let body = {
      provider: provider,
      userid: user_id
    };

    return this.http.post(this.url + "/login", JSON.stringify(body), options)
      .map(this.extractStatus)
      .catch(this.handleErrors);
  }

  logout() {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/logout", options)
      .map(this.extractStatus);
  }

  edit() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });


  }

  details($uid) {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });


  }

  private handleErrors (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractStatus(res: Response) {
    let body = res.json();

    return (body.code === 200);
  }

  private extractID(res: Response) {
    let body = res.json();

    return (body.uid || -1);
  }
}
