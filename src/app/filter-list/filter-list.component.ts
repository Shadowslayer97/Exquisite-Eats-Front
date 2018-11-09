import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  selectedFilterId:number;
  // Filter dict according to sequelize models
  filterList:any = [
    {id:1, name:"All", filter:1},
    {id:2, name:"Healthy", filter:2},
    {id:3, name:"Pocket Friendly", filter:3},
    {id:4, name:"Popular", filter:4} // TODO: Requires join of models at backend
  ];

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this.onFilterSelected(0);
  }

  onFilterSelected(chosenFilter:any) {
    this.selectedFilterId = chosenFilter.id;
    this._sharedService.updateFilter(chosenFilter.filter);
  }

}
