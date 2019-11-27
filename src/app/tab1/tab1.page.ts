import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
theData: { body: { value: any; }; };
  myDataEntries: any;
  
  constructor(public http: HttpClient, private MyService: RecipesService) {}
   

  getData() {
    const connectionURL = 'https://www.food2fork.com/api/search?key=b677aba17fa0d0811133b8daf6284176&q=chicken%20breast&page=2';
    const connection = this.http.get(connectionURL);
    // @ts-ignore
    connection._subscribe( (result: { body: { value: any; }; }) => {
      this.theData = result;
      this.myDataEntries = result.body.value;
      console.log('in getData(), got data', result);
    });
  }


  dosomething(){

    console.log("do something");


    this.MyService.dothehardstuff();
  }

}
