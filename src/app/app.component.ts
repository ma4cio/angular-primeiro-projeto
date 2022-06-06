import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
     
     <app-title ></app-title>     
    <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
  
  constructor(){ }
    ngOnInit(): void {
     
       setTimeout(() => {
         console.log("ngOnInit - OK")
       },1000)
    }



}
