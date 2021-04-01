import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../shared/service/customer.service';
import {Customer} from '../../../shared/interface/customer';
import {Employee} from '../../../shared/model/employee/employee.model';
import {isNumeric} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit
  // , AfterViewInit
{

  @ViewChild('addCustomerForm')
  addCustomerForm!: ElementRef;

  @ViewChild('name')
  nameInputElement!: ElementRef;

  /* this variable holds the customer related values.
  * when adding a new customer: holds a default values of customer.
  * when updating a customer: holds existing customer related info
  */
  customer!: Customer;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private customerService: CustomerService) {
  }

  getIsAddingACustomer(): boolean {
    return (this.router.url === '/customer/add');
  }

  ngOnInit(): void {
    if (this.getIsAddingACustomer()) {
      /* adding a new customer happens here */
      this.customer = this.customerService.emptyCustomer;

    } else {
      /* update existing customer is happening here */
      this.activatedRoute.params.subscribe(value => {
        const id = Number.parseInt(value.id, 10);
        if (id && Number.isInteger(id)){
          const result = this.customerService.findCustomerById(id);
          if (result){
            /* customer is found for that given ID*/
            this.customer = result;
          } else {
            /* customer is NOT found for that given ID */
            this.router.navigateByUrl('/customer');
          }
        }
      });
      // if (this.customerService.customerToBeEdited) {
      //   this.customer = this.customerService.customerToBeEdited;
      // }
    }

    setTimeout(() => {
      (this.nameInputElement.nativeElement as HTMLInputElement).focus();
    }, 0);
  }

  // ngAfterViewInit(): void {
  //   (this.nameInputElement.nativeElement as HTMLInputElement).focus();
  // }

  redirectToManageCustomer(): void {
    if (confirm('Are you sure you want to cancel? Click OK to Cancel.')) {
      this.router.navigateByUrl('/customer');
    }
  }
}
