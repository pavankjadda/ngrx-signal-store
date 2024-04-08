import { Component, OnInit, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { EmployeeStore } from './state/employee.store';
import { EmployeeService } from './employee.service';
import { provideHttpClient } from '@angular/common/http';
import { EmployeeType } from './employee-type.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Employees</h1>
    @for(employee of employeeStore.data(); track employee.email){
      <summary>  {{ employee.lastName }}, {{ employee.firstName }} and 
           Type: 
          @if(employeeTypeEnum.FULL_TIME==employee.employeeType){
            <span>Full Time</span>
          }@else if(employeeTypeEnum.PART_TIME==employee.employeeType){
            <span>Part Time</span>
          }@else{
            <span>Other</span>
          }
    </summary>
    }
  `,
})
export class App implements OnInit {
  employeeTypeEnum: typeof EmployeeType = EmployeeType;
  employeeStore = inject(EmployeeStore);
  employeeService = inject(EmployeeService);

  constructor() {
    console.log('AppComponent constructor', this.employeeStore.data());
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employeeStore.updateUser(data);
    });
  }
}

bootstrapApplication(App, { providers: [provideHttpClient()] });
