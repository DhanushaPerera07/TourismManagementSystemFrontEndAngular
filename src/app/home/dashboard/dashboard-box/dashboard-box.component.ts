import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DashboardBox} from '../../../interface/dashboard-box';

@Component({
  selector: 'app-dashboard-box',
  templateUrl: './dashboard-box.component.html',
  styleUrls: ['./dashboard-box.component.scss']
})
export class DashboardBoxComponent implements OnInit {

  @Input()
  stat!: DashboardBox;

  constructor() {
  }

  ngOnInit(): void {
  }

}
