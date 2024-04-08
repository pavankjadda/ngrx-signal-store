import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from './state/employee.store';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);

  getEmployees() {
    return this.http.get<Employee[]>(
      'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees'
    );
  }
}
