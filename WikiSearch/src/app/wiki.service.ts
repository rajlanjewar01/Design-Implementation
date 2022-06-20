import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }


  WikiSearch(query: string){
    return this.http.get(' https://en.wikipedia.org/w/api.php?',{
    params: {
      action : 'query',
      list : 'search',
      srsearch : query,
      utf8 : '1' ,
      format : 'json',
      origin :'*'
    }
  })
  }
}
