import {Component, inject, OnInit} from '@angular/core';
import {EmployeeType} from '../employee-type.enum';
import {EmployeeStore} from '../state/employee.store';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
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
