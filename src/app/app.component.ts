import { Component,OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
         <!-- <app-diretivas-estruturais></app-diretivas-estruturais>  -->
         <!-- <app-diretivas-atributos>
           <h1>Aula de Diretivas de Atributos</h1>
           <hr>
         </app-diretivas-atributos> 
         <app-diretivas-atributos></app-diretivas-atributos>-->
         <app-new-component></app-new-component>
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
