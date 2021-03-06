import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExquisiteService {

  constructor(private http: HttpClient) { }

  getRequest(url:string, params:any): Observable<any> {
    const API_URL = environment.apiUrl.concat(url);
    return this.http.get<any>(API_URL,params);
  }

  postRequest(url:string, body:any): Observable<any> {
    const API_URL = environment.apiUrl.concat(url);
    return this.http.post<any>(API_URL,body);
  }
}
