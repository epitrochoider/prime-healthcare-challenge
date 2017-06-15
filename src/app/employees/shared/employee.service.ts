import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  private employeesUrl = 'http://demo1555654.mockable.io/getemployees';  // URL to web api
 
  constructor(private http: Http) { }

  getEmployees(): Promise<Employee[]> {
    // Http.get returns natively returns an RxJS observable, 
    // but we don't need that here, so we transform it back into a promise.
    return this.http.get(this.employeesUrl)
               .toPromise()
               .then(response => response.json().employees as Employee[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  getEmployee(id: number): Promise<Employee> {
    return this.getEmployees()
               .then(employees => employees.find(employee => employee.id === id));
  }

}
