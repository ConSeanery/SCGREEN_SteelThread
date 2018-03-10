import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PostDataService {
 

  constructor(private http: Http) {}

  // Uses http.get() to load a single JSON file
  getFoods() {
    return this.http.get('/app/food.json').map((res: Response) => res.json());
  }


  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.

  createFood(food) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(food);
    return this.http.post('/api/values/', body, options).map((res: Response) => res.json());
  }

}
