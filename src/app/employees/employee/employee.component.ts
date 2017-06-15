import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Employee }         from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee.component.html',
  styleUrls: [ './employee.component.css' ]
})

export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
      .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }
}

//TODO: Make another component of this that is a textbox, and push to other component
