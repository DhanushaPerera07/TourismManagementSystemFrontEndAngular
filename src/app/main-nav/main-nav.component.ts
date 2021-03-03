import {Component, OnInit} from '@angular/core';
import {Employee} from '../shared/model/employee.model';
import {EmployeeService} from '../shared/service/employee.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NotFoundComponent} from '../not-found/not-found.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  employee!: Employee;

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog
              // ,
              // public dialogConfig: MatDialogConfig
  ) {
    this.employee = this.employeeService.activeEmployee;
  }

  ngOnInit(): void {
  }

  /** Opens dialog box */
  openManageProfileDialog(): void {
    // this.dialogConfig.height = '50vw';
    this.dialog.open(NotFoundComponent);
  }
}
