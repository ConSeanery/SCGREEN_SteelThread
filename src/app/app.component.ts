import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PostDataService } from './post-data.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Username } from './Username';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent implements OnInit {
 
  username: Username[];
  public _url = '/api/values';


  constructor(private http: Http, private postDataService: PostDataService) { }
 
  apiValues: string[] = [];

  ngOnInit() {
    this.http.get('/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }






  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.postDataService.addUser({ name } as Username)
      .subscribe(username => {
        this.username.push(username);
      });
  }

  

  

}
