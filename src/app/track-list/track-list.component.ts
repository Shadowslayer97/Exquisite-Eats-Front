import { Component, OnInit } from '@angular/core';
import { ExquisiteService } from '../exquisite.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  private userOrders:any = [];
  private orderTrackUrl:string = "/api/order/list/";
  private orderStatus:any;

  constructor(private _exquisiteSvc: ExquisiteService, private _sharedSvc: SharedService) { }

  ngOnInit() {
    this.orderStatus = this._sharedSvc.STATUS;
    this.orderTrackUrl = this.orderTrackUrl + this.getUserCred();
    this._exquisiteSvc.getRequest(this.orderTrackUrl,{}).subscribe(data => {
      this.userOrders = data;
    });
  }

  getUserCred() {
    return "1";
  }

}
