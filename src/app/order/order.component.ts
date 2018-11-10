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
    // Forming data for order post
    let postOrder = this.formOrderForPost();
    let currentUserId:string = this.getUserCred();
    this.orderListUrl = this.orderListUrl + currentUserId;
    this._exquisiteSvc.postRequest(this.orderListUrl,postOrder).subscribe(data => {
      //Open success model
      this.createToast("Order placed!","green");
    },err => {
      this.createToast("Order could'nt be placed","red");
    })
  }

  formOrderForPost() {

    let postOrder:any = {};
    postOrder.total = 0;
    this.orderList.forEach(order => {
      postOrder.total += (order.rate) * (order.quantity);
      order.dishId = order.id;
    })
    postOrder.dishes = this.orderList;

    return postOrder;
  }

  incrementQuantity(index:number) {
    this.orderList[index].quantity += 1;
  }

  getUserCred() {
    //Cookie logic here,get id of user
    let userId = this.getCookie('userId');
    return userId;
  }

  getCookie(name) {
   const splitCookie = document.cookie.split(';');
   for (let i = 0; i < splitCookie.length; i++) {
     const splitValue = splitCookie[i].split('=');
     if (splitValue[0] === name) {
       return splitValue[1];
     }
   }
   return '';
  }

  createToast(message:string, backgroundColor:string) {
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "showToast";
    snackbar.style.background = backgroundColor || "#000";
    snackbar.innerHTML = message;
    setTimeout(() => {
      snackbar.className = snackbar.className.replace("showToast", "");
    }, 3000);
  }

}
