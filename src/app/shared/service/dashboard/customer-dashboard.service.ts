import {Injectable} from '@angular/core';
import {DashboardBox} from '../../../interface/dashboard-box';

const customerDashboardStat = {
  id: 1,
  title: 'Customer',
  statistic: 25,
  icon: 'fa fa-user-o',
  redirectUrl: ''
};

@Injectable({
  providedIn: 'root'
})
export class CustomerDashboardService {

  stat: DashboardBox = customerDashboardStat;

  constructor() {
  }
}
