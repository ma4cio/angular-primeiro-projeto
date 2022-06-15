import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{ comida: string , preco: string }> = [
    { comida: "X Salada", preco: "R$ 10" },
    { comida: "Coxinha" , preco: "R$ 10" },
    { comida: "Sanduba" , preco: "R$ 10" },
    { comida: "HotDog" , preco: "R$ 10" }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm){
    console.log(form);
  }

}
