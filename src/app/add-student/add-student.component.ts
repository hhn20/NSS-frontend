import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {StudService} from '../stud.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  alert:Boolean = false;
  addStud = new FormGroup({
    name: new FormControl(''),
    usn: new FormControl(''),
    role: new FormControl(''),
    team: new FormControl(''),
    ph_no: new FormControl(''),
    BDC: new FormControl(''),
    specialCamp: new FormControl(''),
    emergencyDonor: new FormControl('')
  });
  constructor(private stud:StudService) { }

  ngOnInit(): void {
  }
  putData(){
    this.stud.poststud(this.addStud.value).subscribe((whatever)=>{
      console.log(whatever);
      this.alert = true;
      this.addStud.reset({});
    });
  }
  closeAlert(){
    this.alert = false;
  }

}
