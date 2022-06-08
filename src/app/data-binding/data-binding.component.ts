import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public position: {x: number; y: number} = {x: 0, y: 0};
  public nome: string = "Marcio Lima";
  public idade: number = 42;
  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://i0.wp.com/nightwolf.dev/wp-content/uploads/angular.png?resize=150%2C150&ssl=1";
  public altSrc: string = "Property Binding";
  public titleSrc: string = "Property Binding";

  constructor() { }

  ngOnInit(): void {
  }

  alertaInfo(valor: MouseEvent){
      console.log(valor)
  }

 public mouseMoveTeste(valor: MouseEvent){   
   this.position.x = valor.offsetX;
   this.position.y = valor.offsetY;
 }

}
