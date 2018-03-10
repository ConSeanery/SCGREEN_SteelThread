import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { PostDataService } from './post-data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public _url = '/api/values';

  constructor(private _httpService: Http) { }///, private _postDataService: PostDataService) { }

  apiValues: string[] = [];

  ngOnInit() {
    this._httpService.get('/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }


  PostData(post: { UserName: string; UserPassword: string}): Observable<any> {
    return this._httpService.post('localhost:54980', post)
      .map(res => res.json())
  }


  
  //PROBLEM HERE. WHEN THIS CODE RUNS, ALL GOES TO $#@!
  /*
    createFood(name) {
    let food = {name: name};
    this._postDataService.createFood(food).subscribe(
       data => {
         // refresh the list
         return true;
       },
       error => {
         console.error("Error saving data!");
         return Observable.throw(error);
       }
    );
  }
  
  */
  

}
