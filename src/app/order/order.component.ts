import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { ExquisiteService } from '../exquisite.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private orderList:any = [];
  private subscriber: Subscription;
  private orderListUrl:string = "/api/order/list/"

  @Input() chosenDish: any = {};

  constructor(private _sharedSvc: SharedService, private _exquisiteSvc: ExquisiteService) { }

  ngOnInit() {
    this.subscriber = this._sharedSvc.chosenDish$.subscribe(dish => {
      this.orderList.push(dish);
    })
  }

  placeOrder() {
    let postOrder:any = {};
    postOrder.total = 0;
    this.orderList.forEach(order => {
      postOrder.total += (order.rate) * (order.quantity);
      order.dishId = order.id;
    })
    postOrder.dishes = this.orderList;
    let currentUserId:string = this.getUserCred();
    this.orderListUrl = this.orderListUrl + currentUserId;
    this._exquisiteSvc.postRequest(this.orderListUrl,postOrder).subscribe(data => {
      //Open success model
    })
  }

  incrementQuantity(index:number) {
    console.log(index);
    this.orderList[index].quantity += 1;
  }

  getUserCred() {
    //Cookie logic here,get id of user
    return "1";
  }

}
