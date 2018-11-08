import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private chosenFilter = new Subject<any>();
  public chosenFilter$ = this.chosenFilter.asObservable();

  constructor() { }

  updateFilter(filter:number) {
    let queryParams = {
      params:{
        filterId:filter
      }
    }
    this.chosenFilter.next((queryParams));
  }
}
