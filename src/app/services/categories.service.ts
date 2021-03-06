import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Category} from "../class/category.class";

@Injectable()
export class CategoriesService {
  private url = "https://masa.ousti.sh/categories";


  constructor(private http: Http) {
  };

  list(): Observable<Category[]> {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });
    return this.http.get(this.url + "/list", options)
      .map(this.extractCategoriesList);

  }

  add(name: string, color: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    let data = {
      name: name,
      color: color
    };
    return this.http.post(this.url + "/add", JSON.stringify(data), options)
      .map(this.extractStatus);

  }

  remove(category_id: number) {
    let options = new RequestOptions({
      withCredentials: true // CORS Access-Control-Allow-Credentials header
    });

    return this.http.get(this.url + "/remove/" + category_id, options)
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
