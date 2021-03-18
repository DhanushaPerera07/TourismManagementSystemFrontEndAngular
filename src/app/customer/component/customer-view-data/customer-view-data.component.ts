import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../shared/interface/customer';

@Component({
  selector: 'app-customer-view-data',
  templateUrl: './customer-view-data.component.html',
  styleUrls: ['./customer-view-data.component.scss']
})
export class CustomerViewDataComponent implements OnInit {

  @Input()
  customer!: Customer;

  constructor() {
  }

  ngOnInit(): void {
  }

}
