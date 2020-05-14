import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {BdcService} from '../bdc.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-bdc',
  templateUrl: './update-bdc.component.html',
  styleUrls: ['./update-bdc.component.css']
})
export class UpdateBdcComponent implements OnInit {

  alert:Boolean = false;
  updateBDC = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    ph_no: new FormControl('')
  });
  constructor(private bdc:BdcService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("current id:",this.router.snapshot.params.id);
    this.bdc.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log("current data:",result);
      this.updateBDC = new FormGroup({
        name: new FormControl(result[0]['name']),
        email: new FormControl(result[0]['email']),
        ph_no: new FormControl(result[0]['ph_no'])
      });
    })
  }
  editData(){
    console.log(this.updateBDC.value);
    this.bdc.patchData(this.router.snapshot.params.id,this.updateBDC.value).subscribe((whatever)=>{
      console.log(whatever);
      this.alert = true;
      this.updateBDC.reset({});
    });
  }
  closeAlert(){
    this.alert = false;
  }

}
