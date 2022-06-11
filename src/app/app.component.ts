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
         <app-diretivas-atributos></app-diretivas-atributos>      
         <app-new-component></app-new-component>-->   

         <app-input [contador]="addValue"></app-input>
         <br>
         <button (click)="add()">Add</button>
         <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
  
  public addValue: number = 0;

  constructor(){ }
    ngOnInit(): void {
     
       setTimeout(() => {
         console.log("ngOnInit - OK")
       },1000)
    }

  public add(){
      this.addValue++;    
  }

}
