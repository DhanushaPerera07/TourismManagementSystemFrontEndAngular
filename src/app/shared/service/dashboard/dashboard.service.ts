import {Injectable} from '@angular/core';
import {DashboardBox} from '../../interface/dashboard-box';
import {CustomerDashboardService} from './customer-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboardBoxList = Array<DashboardBox>();

  constructor(private customerDashboardService: CustomerDashboardService) {
    this.dashboardBoxList.push(this.customerDashboardService.stat);
  }
}
