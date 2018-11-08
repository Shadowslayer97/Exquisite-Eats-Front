import { Component, OnInit, Input } from '@angular/core';
import { ExquisiteService } from '../exquisite.service';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  private dishUrl: string = "/api/dishes";
  private dishList: any;
  private subscriber: Subscription;

  @Input() chosenFilter: any = {};


  constructor(private _exquisiteSvc: ExquisiteService,private _sharedSvc: SharedService) { }

  ngOnInit() {
    this.subscriber = this._sharedSvc.chosenFilter$.subscribe(filter => {
      this.chosenFilter = filter;
      //Call to get all dishes
      this._exquisiteSvc.getRequest(this.dishUrl,this.chosenFilter).subscribe(data => {
        this.dishList = data;
        console.log(this.dishList);
      })
    })

  }

}
