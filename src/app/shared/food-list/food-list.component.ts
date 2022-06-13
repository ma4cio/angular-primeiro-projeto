import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList>=[];

  constructor(private foodListService:  FoodListService) { }

  ngOnInit(): void {
   this.foodListService.foodList().subscribe(
          res => this.foodList = res,
          error => error
          
    );

    //this.foodListService.emitEvent.subscribe(res => alert(`Olha voce add => ${res}`));

    this.foodListService.emitEvent.subscribe({
      next: (res: any) => {
        alert(`Olha voce add => ${res.nome}`);
        return this.foodList.push(res);
      }
     
    })

  }

}
