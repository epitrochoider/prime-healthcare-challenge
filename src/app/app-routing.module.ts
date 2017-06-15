import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   	from './dashboard/dashboard.component';
import { EmployeesListComponent }   from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent }  from './employees/employee/employee.component';
import { ClickerComponent }   		from './clicker/clicker.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  		  component: DashboardComponent },
  { path: 'employees',  		  component: EmployeesListComponent },
  { path: 'employee/detail/:id',  component: EmployeeDetailComponent },
  { path: 'clicker',  		  	  component: ClickerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
