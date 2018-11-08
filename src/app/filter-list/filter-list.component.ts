import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  selectedFilterId:number = 1;
  filterList:any = [
    {id:1, name:"All", filter:{}},
    {id:2, name:"Healthy", filter:{}},
    {id:3, name:"Pocket Friendly", filter:{}},
    {id:4, name:"Popular", filter:{}}
  ];

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.updateFilter({}); //To get all dishes
  }

  onFilterSelected(chosenFilter:any) {
    this.selectedFilterId = chosenFilter.id;
    this._sharedService.updateFilter(chosenFilter.filter);
  }

}
