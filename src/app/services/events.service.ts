import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Event} from '../class/event.class';
import {Attendant} from '../class/attendant.class';
import {User} from "../class/user.class";

@Injectable()
export class EventsService {
  private url = "https://masa.ousti.sh/events";

  constructor(private http: Http) {
  };

  list(access: string = "public", city: string = "0", startts: number = 0, endts: number = 2147483647, page: number = 0, limit: number = 100): Observable<Event[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/list/" + access + '/' + city + '/' + startts + '/' + endts + '/' + page + '/' + limit, options)
      .map(this.extractEventsList);
  }

  limitListForUser(limit: number = 5): Observable<Event[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/reminder/" + limit, options)
      .map(this.extractEventsList);
  }

  listForUserByDate(day: string, month: string, year: string): Observable<Event[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    // return this.http.get("http://localhost/danzet/xxx.php")//, options)
    return this.http.get(this.url + "/listday/" + year + "/" + month + "/" + day, options)
      .map(this.extractEventsList);
  }

  // listForUserByPeriod(day_start: number, day_end: number): Observable<Event[]> {
  //   let options = new RequestOptions({
  //     withCredentials: true // CORS Access-Control-Allow-Credentials header
  //   });
  //
  //   return this.http.get("http://localhost/danzet/xxx.php")//, options)
  //   // return this.http.get(this.url + "/list/" + username + '/' + day, options)
  //     .map(this.extractEventsList);
  // }

  userListForEvent(event_id: number): Observable<User[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get("http://localhost/danzet/xxx.php")//, options)
    // return this.http.get(this.url + "/list/" + username + '/' + day, options)
      .map(this.extractUsersList);
  }

  details(eventid: number): Observable<Event> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/details/" + eventid, options)
      .map(this.extractEventDetails);
  }

  detailsForUser(username: string, eventid: number): Observable<Event> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });
    return this.http.get("http://localhost/danzet/xxx.php")//, options)
    // return this.http.get(this.url + "/details/" + username+"/" + eventid, options)
      .map(this.extractEventDetails);
  }

  add(event: Event): Observable<Event> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.post(this.url + "/add", JSON.stringify(event), options)
      .map(this.extractEventDetails);
  }

  remove(eventid: number): Observable<boolean> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/remove/" + eventid, options)
      .map(this.extractStatus);
  }

  edit(eventid: number, event: Event): Observable<boolean> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.post(this.url + "/edit/" + eventid, JSON.stringify(event), options)
      .map(this.extractStatus);
  }

  search(query: string): Observable<Event> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get("${this.url}/search/$(query)", options)
      .map(this.extractEventsList);
  }

  enroll(eventid: number): Observable<boolean> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/enroll/" + eventid, options)
      .map(this.extractStatus);
  }

  disenroll(eventid: number): Observable<boolean> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/disenroll/" + eventid, options)
      .map(this.extractStatus);
  }

  enrolled(eventid: number): Observable<boolean> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/enrolled/" + eventid, options)
      .map(this.extractEnrolledStatus);
  }

  attendants(eventid: number): Observable<Attendant[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/attendants/"+eventid, options)
      .map(this.extractEventAttendants);
  }

  cities(): Observable<string[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/cities", options)
      .map(this.extractEventsCities);
  }

  total(): Observable<number> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/total", options)
      .map(this.extractTotalCount);
  }

  private extractTotalCount(res: Response) {
    let body = res.json();

    if (body.code == 200)
      return body.count;
    else
      return -1;
  }

  private extractEventsCities(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.cities;
    else
      return [];
  }

  private extractEventDetails(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.event;
    else
      return {};
  }

  private extractEventsList(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.events;
    else
      return {};
  }

  private extractUsersList(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.users;
    else
      return {};
  }

  private extractStatus(res: Response) {
    let body = res.json();

    return (body.code === 200);
  }

  private extractEnrolledStatus(res: Response) {
    let body = res.json();

    return body.enrolled;
  }

  private extractEventAttendants(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.attendants;
    else
      return {};
  }
}
