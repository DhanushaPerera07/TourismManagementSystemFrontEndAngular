import {Injectable} from '@angular/core';
import {Employee} from '../model/employee/employee.model';
import {Position} from '../model/employee/position.enum';
import {Status} from '../model/employee/status.enum';
import {Gender} from '../model/gender.enum';

const employeeSample = new Employee(2,
  'Prasad Madusanka',
  '22, Alfred House Road, Colombo 03',
  new Date(Date.parse('7/13/1995')),
  '95XXXXXXXV',
  '94-33-2255000',
  'prasad@temporary-mail.net',
  Gender.MALE,
  Position.INTERN,
  Status.ACTIVE,
  null
);

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  activeEmployee = employeeSample;

  constructor() {
  }

  getActiveEmployee(): Employee {
    return this.activeEmployee;
  }

}
