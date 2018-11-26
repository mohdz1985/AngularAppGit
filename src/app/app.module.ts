import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';



const appRoutes: Routes = [
  { path: 'app-department', component: DepartmentComponent },
  { path: 'app-employees', component: EmployeesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,  
    ToastrModule.forRoot(),
    BrowserAnimationsModule,NoopAnimationsModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
