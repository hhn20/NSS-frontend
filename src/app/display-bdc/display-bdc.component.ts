import { Component, OnInit } from '@angular/core';
import {BdcService} from '../bdc.service';
@Component({
  selector: 'app-display-bdc',
  templateUrl: './display-bdc.component.html',
  styleUrls: ['./display-bdc.component.css']
})
export class DisplayBdcComponent implements OnInit {

  constructor(private bdc: BdcService) { }
  alert:Boolean = false;
  bdclist: any = []

  getstuff(){
    this.bdc.getData().subscribe((data)=>{
      console.log(data);
      this.bdclist = data;
    });
  }

  ngOnInit(): void {
    this.getstuff();
  }

  deleteBdc(item){
    this.bdc.deleteData(item).subscribe((result)=>{
      console.log("delete bdc",result);
      this.alert = true;
      this.getstuff();
    });
  }
  closeAlert(){
    this.alert = false;
  }
}
