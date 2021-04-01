import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../shared/interface/customer';
import {CustomerService} from '../../../shared/service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customer!: Customer;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private customerService: CustomerService) {
    this.activatedRoute.params.subscribe(value => {
      const id = Number.parseInt(value.id, 10);
      if (Number.isInteger(id)) {
        const result = this.customerService.findCustomerById(id);
        if (result) {
          this.customer = result;
        } else {
          /* no customer found for that given ID */
          this.router.navigateByUrl('/customer');
        }
      } else {
        /* id is invalid (not an number) */
        this.router.navigateByUrl('/customer');
      }
    });
  }

  ngOnInit(): void {
  }

}
