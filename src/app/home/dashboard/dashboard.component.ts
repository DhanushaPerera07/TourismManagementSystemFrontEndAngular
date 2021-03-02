import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../shared/service/dashboard/dashboard.service';
import {DashboardBox} from '../../interface/dashboard-box';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Math = Math;
  dashboardBoxList!: DashboardBox[];

  constructor(private dashboardService: DashboardService) {
    this.dashboardBoxList = this.dashboardService.dashboardBoxList;
  }

  ngOnInit(): void {
  }

}
