import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: [ './employee-list.component.css' ]
})

export class EmployeesListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private router: Router,
    private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/employee/detail', id]);
  }
}
