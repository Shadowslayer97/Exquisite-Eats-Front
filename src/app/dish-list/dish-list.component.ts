import { Component, OnInit } from '@angular/core';
import { ExquisiteService } from '../exquisite.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  private dishUrl: string = "/api/dishes";
  private dishList: any;
  constructor(private svc: ExquisiteService) { }

  ngOnInit() {
    this.svc.getRequest(this.dishUrl).subscribe(data => {
      this.dishList = data;
      console.log(this.dishList);
    })
  }

}
