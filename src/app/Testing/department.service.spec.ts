import { TestBed, inject } from '@angular/core/testing';
import { DepartmentService } from '../department/department.service';

describe('DepartmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentService]
    });
  });

  it('should be created', 
  inject([DepartmentService], (service: DepartmentService) => {
    expect(service).toBeTruthy();
  }));

  it('should be show Department', 
  inject([DepartmentService], (service: DepartmentService) => {
    expect(service.Getvalue("Zahid")).toContain("o");
  }));
  
});
