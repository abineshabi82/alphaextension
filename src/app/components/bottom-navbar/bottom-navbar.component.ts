import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls:['./css.css']
})
export class BottomNavbarComponent  {
  name = 'Angular';
  status=false;
  toggleClass(event){
    console.log(event);
    if(this.status===false)
    this.status=true;
  }
  
  togglefalse(event){
    console.log(event);
    if(this.status===true)
    this.status=false;
  }
 /* togglearrowrotate(){
    if(status)
    arrow
  }*/
}
