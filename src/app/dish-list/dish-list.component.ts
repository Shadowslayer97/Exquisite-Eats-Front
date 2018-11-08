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

  @Input() chosenFilter: any;


  constructor(private exquisiteSvc: ExquisiteService,private sharedSvc: SharedService) { }

  ngOnInit() {
    this.exquisiteSvc.getRequest(this.dishUrl).subscribe(data => {
      this.dishList = data;
      console.log(this.dishList);
    })
    this.subscriber = this.sharedSvc.chosenFilter$.subscribe(filter => {
      this.chosenFilter = filter;
      //Call to get all dishes
      console.log(this.chosenFilter);
    })
  }

}
