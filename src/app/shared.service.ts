import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private chosenFilter = new Subject<any>();
  public chosenFilter$ = this.chosenFilter.asObservable();

  private chosenDish = new Subject<any>();
  public chosenDish$ = this.chosenDish.asObservable();

  public STATUS:any = {
    1 : {title:"Processing..", colour:"orange"},
    2 : {title:"Order placed", colour:"green"},
    3 : {title:"En route", colour:"green"},
    4 : {title:"Delivered", colour:"black"},
    5 : {title:"Order Failed", colour:"red"}
  };

  constructor() { }

  updateFilter(filter:number) {
    let queryParams = {
      params:{
        filterId:filter
      }
    }
    this.chosenFilter.next((queryParams));
  }

  updateOrderList(dish:any) {
    this.chosenDish.next((dish));
  }
}
