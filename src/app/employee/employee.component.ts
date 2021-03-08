import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/service/employee.service';
import {Employee} from '../shared/model/employee/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  activeEmployee: Employee;

  constructor(private employeeService: EmployeeService
  ) {
    this.activeEmployee = this.employeeService.getActiveEmployee();
  }

  ngOnInit(): void {
  }

}
