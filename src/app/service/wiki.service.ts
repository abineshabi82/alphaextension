import {Injectable,enableProdMode, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable()
export class WikiService{
  name='wikiservice';
  constructor(private wikihttp:HttpClient){
  }
  

  loadHtml(event){
    return this.wikihttp.get("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&rvprop=content&format=json&origin=*&titles="+event);
    /**/
  }
  
}