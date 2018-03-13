import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Username } from './Username';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class PostDataService {

  private usernamesUrl = 'api/values';  // URL to web api
  

  constructor(private http: HttpClient) { }

  /*
  getUsername(): Observable<Username[]> {
    // Todo: send the message _after_ fetching the heroes
    return of(Username);
  }
  */


  /** POST: add a new hero to the server */
  addUser(username: Username): Observable<Username> {
    return this.http.post<Username>('/api/values/', username, httpOptions).pipe(
      tap((username: Username) => this.log(`added hero w/ id=${username.id}`)),
      catchError(this.handleError<Username>('addHero'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    
  }
}
