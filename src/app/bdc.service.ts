import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BdcService {

  bdcurl = "https://thawing-wildwood-87650.herokuapp.com/bdc";
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.bdcurl);
  }

  getCurrentData(data){
    return this.http.get(`${this.bdcurl}/${data}`);
  }

  postData(data){
    console.log('postData called');
    return this.http.post(this.bdcurl,data);
  }

  deleteData(data){
    return this.http.delete(`${this.bdcurl}/${data}`);
  }

  patchData(id,data){
    return this.http.patch(`${this.bdcurl}/${id}`,data);
  }
}
