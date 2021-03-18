import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../shared/interface/customer';
import {CustomerService} from '../../../shared/service/customer.service';

export let customerVariable: Customer;

// const customer: Customer = {
//   id: 1,
//   name: 'John Doe',
//   nationality: 'American',
//   passportNo: '1234567A',
//   email: 'john.doe@gmail.com',
//   phone: '2025550152 ',
//   country: 'America',
//   addedDate: new Date(Date.now())
// };

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService) {
    this.customer = this.customerService.customer;
  }

  ngOnInit(): void {
  }

}
