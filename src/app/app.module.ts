import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent }            from './app.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

import { EmployeesListComponent }  from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee/employee.component';
import { EmployeeService}          from './employees/shared/employee.service';

import { ClickerComponent }      from './clicker/clicker.component';
import { ClickerCountComponent }      from './clicker/clicker-count.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesListComponent,
    EmployeeDetailComponent,
    ClickerComponent,
    ClickerCountComponent
  ],
  providers: [ EmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
