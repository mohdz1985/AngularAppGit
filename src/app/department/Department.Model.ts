import { Observable } from "rxjs";
import { Employee } from "../employees/shared/employee.model";

export class Department {
  constructor(
    public departmentname: string,
    public departmentHead: string,
    public departmentSerial: number,
    public EmployeeID: number) { }  
}
