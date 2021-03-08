import {Component, OnInit} from '@angular/core';
import {Employee} from '../shared/model/employee/employee.model';
import {EmployeeService} from '../shared/service/employee.service';
import {Router} from '@angular/router';
import {EmployeeComponent} from '../employee/employee.component';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  /* holds the active employee details */
  employee!: Employee;

  /* dialog box related variables */
  dialogConfig: MatDialogConfig = new MatDialogConfig();
  dialogRef!: MatDialogRef<any>;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              public dialog: MatDialog) {
    /* get active employee details */
    this.employee = this.employeeService.getActiveEmployee();

    /* setting dialog box related configs */
    this.dialogConfig = {
      width: '60%',
      height: '100%',
      disableClose: true
    };
  }

  ngOnInit(): void {
  }

  /** Open the dialog box */
  openDialogBox(): void {
    this.dialogRef = this.dialog.open(EmployeeComponent, this.dialogConfig);
  }

  /** Close the dialog box */
  closeDialogBox(): void {
    this.dialogRef.close();
  }

  /** Log out from the system */
  onLogout(): void {
    /* Signing out process */

    /* Navigate to sign in page */
    this.router.navigateByUrl('/signin');
  }

}
