import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  textSearch: string;

  updateList(textSearch: any){
    if (typeof textSearch === "string"){
      this.textSearch = textSearch;
    }
  }
}
