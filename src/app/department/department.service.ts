import { Injectable } from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  Getvalue(department: string) : string
  {
    return isNullOrUndefined(department) ? "Hello Zahid it is Null" : department;
  }
}
