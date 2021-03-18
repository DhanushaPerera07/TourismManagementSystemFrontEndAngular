import {Injectable} from '@angular/core';
import {DashboardBox} from '../../interface/dashboard-box';

const customerDashboardStat = {
  id: 1,
  title: 'Customer',
  statistic: 25,
  styles: {
    backgroundColor: '#fdb827'
  },
  icon: 'perm_identity',
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
