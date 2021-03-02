import {Injectable} from '@angular/core';
import {Employee} from '../model/employee.model';

const employeeSample = new Employee(2, 'Bruce Wayne');

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  activeEmployee = employeeSample;

  constructor() {
  }
}
