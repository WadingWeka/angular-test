import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-details-dash',
  templateUrl: './employee-details-dash.component.html',
  styleUrls: ['./employee-details-dash.component.css']
})
export class EmployeeDetailsDashComponent implements OnInit {

  employee: Employee

  


  constructor() { 
    this.employee = new EmployeeComponent();
  }

  ngOnInit() {
  }

}
