import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { AddBdcComponent } from './add-bdc/add-bdc.component';
import { DeleteBdcComponent } from './delete-bdc/delete-bdc.component';
import { UpdateBdcComponent } from './update-bdc/update-bdc.component';
import { DisplayBdcComponent } from './display-bdc/display-bdc.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    DisplayStudentComponent,
    AddBdcComponent,
    DeleteBdcComponent,
    UpdateBdcComponent,
    DisplayBdcComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
