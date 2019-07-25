import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-details-dash',
  templateUrl: './employee-details-dash.component.html',
  styleUrls: ['./employee-details-dash.component.css']
})
export class EmployeeDetailsDashComponent implements OnInit {

  employee: EmployeeComponent;

  isAddProjectVisable: boolean;
  isProjectFormValid: boolean;
  invalidFormMessage: string;
  isEditable: boolean;

  constructor(private empSvc: EmployeeService) {

    this.isEditable = false;
    this.isAddProjectVisable = false;
    this.isProjectFormValid = true;
    this.invalidFormMessage = '';
  }

  ngOnInit() {
      this.employee = new EmployeeComponent();
      console.log(this.employee);
      console.log(this.empSvc);
      this.employee.initalise(this.empSvc);

      }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

  deleteProject(index) {
    this.employee.assignments.splice(index, 1);
  }

  addNewProject(pid, pname, pcustomer) {
    console.log(pid.value, pname.value, pcustomer.value);

    if (isNaN(pid.value)) {
      console.log('PID NaN');
      this.isAddProjectVisable = false;
      this.isProjectFormValid = true;
      this.invalidFormMessage = 'Project ID must  ';
    } else {
      this.employee.assignments.push({
          id: pid.value, name: pname.value, customer: pcustomer.value
      });

      this.isAddProjectVisable = false;
      this.isProjectFormValid = true;
      this.invalidFormMessage = '';

    }
  }

  toggleAddProject() {
    this.isAddProjectVisable = !this.isAddProjectVisable;
  }

}
