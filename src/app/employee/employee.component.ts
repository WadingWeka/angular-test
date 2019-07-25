import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Department } from '../department';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  id: number;
  name: string;
  salary: number;

  currentDepartment: Department;
  assignments: Project[];
  employeeId: number;

  constructor() {
    this.id = 100;
    this.name = 'Test Employee';
    this.salary = 130.70;

    this.currentDepartment = {
      id: 100, name: 'Test Department', location: 'UK'
    };

    this.assignments = [
      {id: 100, name: 'Test Department 1', customer: 'UK-Customer'},
      {id: 101, name: 'Test Department 2', customer: 'US-Customer '}
    ];
  }

  ngOnInit() {
    // Subscribe for HTTP call and wait for responce

  }

  initalise(empSvc: EmployeeService) {
    console.log(empSvc);
    empSvc.findEmployeeById(36).subscribe(
      resp => {
        console.log(resp);
        this.id = resp.employeeId;
        this.name = resp.name;
        this.salary = resp.salary;
        this.currentDepartment = resp.currentDepartment;
        this.assignments = resp.assignments;
      }
    );
  }

}
