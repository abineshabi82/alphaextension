import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';

import {WikiService} from '../../service/wiki.service';

@Component({
  selector: 'wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls:['./csswiki.css']
})
export class WikipediaComponent implements OnInit  {
  name = 'Angular';
  userInput='';
wikiContent$:any=null;
@ViewChild("divID",{static:false}) divID: ElementRef;
  constructor(private wikiService:WikiService){
    
  }
  
  ngOnInit(){
    
   
  }

  getWikiContent(event:any){
    this.wikiService.loadHtml(event.target.value)
    .subscribe(
      (x:any)=>{this.wikiContent$=x.query.pages[Object.keys(x.query.pages)[0]].extract;}
      ,error=>console.log(error),
      ()=>{this.divID.nativeElement.innerHTML = this.wikiContent$;}
    );
  }

  setup(){
     console.log(this.wikiContent$);
   console.log(this.userInput);

  }
}
