import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages :any = [];

  constructor(private http: WikiService ) {}

  onTerm(terms: string){
    const results =  this.http.WikiSearch(terms).
    subscribe( (response: any) => {
        this.pages = response.query.search;
    })
   
  }
}
