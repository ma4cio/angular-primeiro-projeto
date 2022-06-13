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
         <app-new-component></app-new-component> 

         <app-input [contador]="addValue"></app-input>
         <br>
         <button (click)="add()">Add</button>
         <ng-template [ngIf]="getDados">
          <h1>{{ getDados.nome }}  {{ getDados.idade }}</h1> 
         </ng-template>
         <app-output (enviarDados)="setDados($event)"></app-output>--> 
         <app-food-add></app-food-add>
         <app-food-list></app-food-list>
         <router-outlet></router-outlet>` 
})

export class AppComponent implements OnInit {
  
  public addValue: number = 0;
  public getDados: {nome: string, idade: number} | undefined;

  constructor(){ }
    ngOnInit(): void {
     
       setTimeout(() => {
         console.log("ngOnInit - OK")
       },1000)
    }

  public add(){
      this.addValue++;    
  }
  public setDados(event:{nome: string, idade: number}){
    this.getDados = event;
  }

}
