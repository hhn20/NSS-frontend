import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudService {
students = "https://thawing-wildwood-87650.herokuapp.com/students";
donors = "https://thawing-wildwood-87650.herokuapp.com/students/donors";
certificates = "https://thawing-wildwood-87650.herokuapp.com/students/certificate";
  constructor(private http:HttpClient) { }
  
  getstud(){
    return this.http.get(this.students);
  }
  getdonors(){
    return this.http.get(this.donors);
  }
  getcerti(){
    return this.http.get(this.certificates);
  }
  getCurrentstud(data){
    return this.http.get(`${this.students}/${data}`);
  }
  poststud(data){
    console.log('poststud called');
    return this.http.post(this.students,data);
  }
  deletestud(data){
    return this.http.delete(`${this.students}/${data}`);
  }
  patchstud(id,data){
    return this.http.patch(`${this.students}/${id}`,data);
  }
}
