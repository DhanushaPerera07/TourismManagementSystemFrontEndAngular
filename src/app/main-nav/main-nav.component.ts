import {Component, OnInit} from '@angular/core';
import {Employee} from '../shared/model/employee/employee.model';
import {EmployeeService} from '../shared/service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  employee!: Employee;

  constructor(private employeeService: EmployeeService,
              private router: Router) {
    this.employee = this.employeeService.activeEmployee;
  }

  ngOnInit(): void {
  }

  /** Opens dialog box */
  openManageProfileDialog(): void {
    this.employeeService.openDialogBox();
  }

  /** Log out from the system */
  onLogout(): void {
    /* Signing out process */

    /* Navigate to sign in page */
    this.router.navigateByUrl('/signin');
  }

}
