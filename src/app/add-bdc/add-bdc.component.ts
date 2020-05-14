import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {BdcService} from '../bdc.service';

@Component({
  selector: 'app-add-bdc',
  templateUrl: './add-bdc.component.html',
  styleUrls: ['./add-bdc.component.css']
})
export class AddBdcComponent implements OnInit {

  alert:Boolean = false;
  addBDC = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    ph_no: new FormControl('')
  });
  constructor(private bdc:BdcService) { }

  ngOnInit(): void {
  }
  putData(){
    this.bdc.postData(this.addBDC.value).subscribe((whatever)=>{
      console.log(whatever);
      this.alert = true;
      this.addBDC.reset({});
    });
  }
  closeAlert(){
    this.alert = false;
  }

}
