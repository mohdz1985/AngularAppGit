import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model'

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  employeeList: Employee[];
  constructor(private http: Http) { }

  postEmployee(emp: Employee): Observable<Employee> {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:28750/api/Employee', body, requestOptions).pipe<Employee>();
  }

  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:28750/api/Employee/' + id,
      body,
      requestOptions).pipe<Employee>();
  }

  getEmployeeList() {
    this.http.get('http://localhost:28750/api/Employee').subscribe((data: Response) => {
      return this.employeeList = data.json() as Employee[];
    })
  }

  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:28750/api/Employee/' + id).pipe(res => res);
  }
}     
