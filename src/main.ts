import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {EmployeeComponent} from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-employee/>
  `,
  imports: [
    EmployeeComponent
  ]
})
export class App {
}

bootstrapApplication(App, { providers: [provideHttpClient()] });
