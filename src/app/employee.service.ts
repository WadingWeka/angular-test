import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  rootURL: string;

  constructor(private httpsvs: HttpClient) {
    // init base url
    this.rootURL = 'http://localhost:7700/hrapp/apis/employees';
  }

  // Identify params and return type for requests
  findEmployeeById(employeeId: number): Observable<EmployeeComponent> {
    console.log(this.rootURL + '/' + employeeId);
    return this.httpsvs.get<EmployeeComponent>(this.rootURL + '/' + employeeId);
  }

  updateEmployee(employee: EmployeeComponent): Observable<EmployeeComponent> {
    console.log(this.rootURL);
    return this.httpsvs.put<EmployeeComponent>(this.rootURL, employee);
  }
}
