import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {StudService} from '../stud.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(private stud:StudService) { }

  u = null;
  jumbo = false;
  alert:Boolean = false;
  studlist = {};
  donlist = {};
  certlist ={};
  studsearch = new FormGroup({
    usn: new FormControl('')
  });

  refresh(){
    this.stud.getstud().subscribe((data)=>{
      console.log(data);
      this.studlist = data;
    });
    this.stud.getdonors().subscribe((data)=>{
      console.log(data);
      this.donlist = data;
    });
    this.stud.getcerti().subscribe((data)=>{
      console.log(data);
      this.certlist = data;
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  removeStud(item){
    this.stud.deletestud(item).subscribe((result)=>{
      console.log("delete student",result);
      this.alert = true;
      this.refresh();
    });
  }
  closeAlert(){
    this.alert = false;
  }

  studentdets(){
    this.stud.getCurrentstud(this.studsearch.value.usn).subscribe((data)=>{
      console.log(data);
      this.u = data;
      this.jumbo = true;
    });
  }

  clear(){
    this.jumbo = false;
  }
}
