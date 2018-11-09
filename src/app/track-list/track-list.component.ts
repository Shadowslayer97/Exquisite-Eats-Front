import { Component, OnInit } from '@angular/core';
import { ExquisiteService } from '../exquisite.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  private userOrders:any = [];
  private orderTrackUrl:string = "/api/order/list/";

  constructor(private _exquisiteSvc: ExquisiteService) { }

  ngOnInit() {
    this.orderTrackUrl = this.orderTrackUrl + this.getUserCred();
    this._exquisiteSvc.getRequest(this.orderTrackUrl,{}).subscribe(data => {
      this.userOrders = data;
    });
  }

  getUserCred() {
    return "1";
  }

}
