import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsDashComponent } from './employee-details-dash/employee-details-dash.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({ //Module config
  declarations: [ //List of all types in this module
    AppComponent, EmployeeDetailsDashComponent, EmployeeComponent
  ],
  imports: [ //Refreencing other modules used in this module 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //if angular version < 4.x: List of services in theis module
  bootstrap: [AppComponent] //root component of the application
})
export class AppModule { }
