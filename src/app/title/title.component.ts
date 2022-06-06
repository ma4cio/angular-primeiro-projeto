import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy {

 @Input() public title:string = "Bem vindo!"
  
  constructor() { }

  ngOnDestroy(): void {
    console.log("Deu bom ele foi destruido!")
  }

  ngOnInit(): void {  }

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso!");
  }

}
