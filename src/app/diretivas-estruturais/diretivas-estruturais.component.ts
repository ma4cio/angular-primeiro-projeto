import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    {nome: "Márcio Lima", idade: 42},
    {nome: "Tatiane Lima", idade: 32},
    {nome: "Cauã Lima", idade: 5},
    {nome: "Lara Lima", idade: 0}
  ];
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {      
      if(this.condition) {
        this.condition = false;
      }else {
        this.condition = true;
      }
    },2000)
  }

  public onClick(){
    if(this.conditionClick) {
      this.conditionClick = false;
    }else {
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({ nome: "Lara", idade:0 })
  }

  public onClickEventList(event: number){
    this.list.splice(event,1)
  }
}
