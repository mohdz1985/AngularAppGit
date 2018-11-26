import { Component, OnInit } from '@angular/core';
import { NgForm,ReactiveFormsModule } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { DepartmentService } from "./department.service";
import { Observable } from 'rxjs';
import { Department } from './Department.Model';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private toastr: ToastrService, private depService: DepartmentService) { }

  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  GetDepartment() {    
  }

  myDir : any;

 allPersons = [
     {name: 'Mahesh', age: '25'},
     {name: 'Shakti', age: '23'},
     {name: 'Krishna', age: '23'},
     {name: 'Radha', age: '21'},	 
   ];
   
  ngOnInit() {
	 
  }

  onSubmit(abc:any){

  }
}
