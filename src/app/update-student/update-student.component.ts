import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {StudService} from '../stud.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  alert:Boolean = false;
  updateStud = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
    team: new FormControl(''),
    ph_no: new FormControl(''),
    BDC: new FormControl(''),
    specialCamp: new FormControl(''),
    emergencyDonor: new FormControl('')
  });
  constructor(private stud:StudService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("current id:", this.router.snapshot.params.id);
    this.stud.getCurrentstud(this.router.snapshot.params.id).subscribe((result) => {
      console.log("current data:", result);
      this.updateStud = new FormGroup({
        name: new FormControl(result[0]['name']),
        role: new FormControl(result[0]['role']),
        team: new FormControl(result[0]['team']),
        ph_no: new FormControl(result[0]['ph_no']),
        BDC: new FormControl(result[0]['BDC']),
        specialCamp: new FormControl(result[0]['specialCamp']),
        emergencyDonor: new FormControl(result[0]['emergencyDonor'])
      });
    })
  }
  editData(){
    console.log(this.updateStud.value);
    this.stud.patchstud(this.router.snapshot.params.id,this.updateStud.value).subscribe((whatever)=>{
      console.log(whatever);
      this.alert = true;
      this.updateStud.reset({});
    });
  }
  closeAlert(){
    this.alert = false;
  }


}
