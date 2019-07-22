import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Department } from '../department';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    id: number
    name: string
    salary: number

    current_department: Department
    assignments: Project[]

  constructor() { 
    this.id=100;
    this.name="Test Employee";
    this.salary=130.70;

    this.current_department = {
      id: 100,name:"Test Department",location:"UK"
    }

    this.assignments = [
      {id: 100,name:"Test Department 1",customer:"UK-Customer"},
      {id: 101,name:"Test Department 2",customer:"US-Customer"}
    ]
  }

  ngOnInit() {
  }

}
