import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {DisplayStudentComponent} from './display-student/display-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {AddBdcComponent} from './add-bdc/add-bdc.component';
import {DisplayBdcComponent} from './display-bdc/display-bdc.component';
import {UpdateBdcComponent} from './update-bdc/update-bdc.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    component: AddStudentComponent,
    path: "add-student"
  },
  {
    component: DisplayStudentComponent,
    path: "display-student"
  },
  {
    component: UpdateStudentComponent,
    path: "update-student/:id"
  },
  {
    component: AddBdcComponent,
    path: "add-bdc"
  },
  {
    component: DisplayBdcComponent,
    path: "display-bdc"
  },
  {
    component: UpdateBdcComponent,
    path: "update-bdc/:id"
  },
  {
    component: LoginComponent,
    path: "about"
  },
  {
    component: HomeComponent,
    path: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
