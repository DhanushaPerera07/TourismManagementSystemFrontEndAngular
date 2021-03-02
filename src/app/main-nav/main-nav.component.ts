import {Component, OnInit} from '@angular/core';
import {Employee} from '../shared/model/employee.model';
import {EmployeeService} from '../shared/service/employee.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  employee!: Employee;

  constructor(private employeeService: EmployeeService) {
    this.employee = this.employeeService.activeEmployee;
  }

  ngOnInit(): void {
  }

}
