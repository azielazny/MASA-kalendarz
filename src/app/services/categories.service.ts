import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Category} from "../class/category.class";

@Injectable()
export class CategoriesService {
  private url = "https://masa.oustish.pl/categories";


  constructor(private http: Http) {
  };

  list(username: string, lastknowncid: number = 0): Observable<Category[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/list/" + username + "/" + lastknowncid, options)
      .map(this.extractCategoriesList);
 
  }

  add(username: string, categoryname: string, color: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    let data = {
      username: username,
      categoryname: categoryname,
      color: color
    };
    return this.http.post(this.url + "/add/" + username, JSON.stringify(data), options)
      .map(this.extractStatus);

  }
  remove(username: string, categoryid: number) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    let data = {
      username: username,
      categoryid: categoryid
    };

    return this.http.post(this.url + "/remove/" + username, JSON.stringify(data), options)
      .map(this.extractStatus);
  }

  private extractCategoriesList(res: Response) {
    let body = res.json();

    if (body.code === 200)
      return body.categories;
    else
      return {};
  }

  private extractStatus(res: Response) {
    let body = res.json();

    return (body.code === 200);
  }
}
