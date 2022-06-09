import { Component,OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
     
    <app-diretivas-estruturais></app-diretivas-estruturais> 
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
