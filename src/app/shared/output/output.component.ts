import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();
  
  public list: Array<{nome: string, idade: number}>=[
    {nome: "Márcio Lima", idade: 42},
    {nome: "Tatiane Lima", idade: 32},
    {nome: "Cauã Lima", idade: 5},
    {nome: "Lara Lima", idade: 0}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getDados(event: number){
    this.enviarDados.emit(this.list[event]);  
  }

}
