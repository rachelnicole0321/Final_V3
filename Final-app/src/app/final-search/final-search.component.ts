import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

@Component({
  selector: 'app-final-search',
  templateUrl: './final-search.component.html',
  styleUrls: ['./final-search.component.css']
})
export class FinalSearchComponent implements OnInit {
  loading:Boolean = false;
  apiRoot:string = 'https://api.edamam.com/search'
  data:any;

getRecipes(searchString:string){
  this.loading = true;
  let apiURL = `${this.apiRoot}?q=${searchString}&app_id=550a367d&app_key=29af16694b493e5bf80dd47dd816f25d`
  this.http.get(apiURL)
  .toPromise()
  .then(res => {
      this.data = res.json().hits;
      this.loading =false;
  }, err => {
      console.log(err);
  });
  console.log(this.data);
}

  constructor(private http:Http) { }

  ngOnInit() {
  }

}
