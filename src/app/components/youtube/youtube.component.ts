import { Component } from '@angular/core';
import {WikiService} from '../../service/wiki.service';

@Component({
  selector: 'youtube',
  templateUrl: './youtube.component.html'
})
export class YoutubeComponent  {
  name = 'Angular';
  constructor(private wikiService:WikiService){

  }
  wikiContent=this.wikiService.name;
  changeWikiContent(event){
    this.wikiContent=event.target.value;
  }
}
