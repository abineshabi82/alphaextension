import { NgModule,enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {TopNavbarComponent} from './components/top-navbar/top-navbar.component';
import {BottomNavbarComponent} from './components/bottom-navbar/bottom-navbar.component';
import {WikipediaComponent} from './components/wikipedia/wikipedia.component';
import {YoutubeComponent} from './components/youtube/youtube.component';
import {QuoraComponent} from './components/quora/quora.component';
import {WikiService} from './service/wiki.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FormsModule,HttpClientModule,HttpClientJsonpModule ],
  declarations: [ AppComponent , TopNavbarComponent, BottomNavbarComponent, WikipediaComponent, YoutubeComponent, QuoraComponent ],
  bootstrap:    [ AppComponent ],
  providers:[WikiService]
})
export class AppModule {
 }
