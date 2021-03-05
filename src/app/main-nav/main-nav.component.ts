import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../shared/model/employee/employee.model';
import {EmployeeService} from '../shared/service/employee.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {EmployeeComponent} from '../employee/employee.component';

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

  /** Opens dialog box */
  openManageProfileDialog(): void {
    this.employeeService.openDialogBox();
  }
}
