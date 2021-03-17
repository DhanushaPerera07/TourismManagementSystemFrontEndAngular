import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../../shared/service/customer.service';
import {Customer} from '../../../interface/customer';
import {Employee} from '../../../shared/model/employee/employee.model';

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

  customer: Customer = {
    id: 0,
    name: '',
    nationality: '',
    passportNo: '',
    email: '',
    phone: '',
    countryCallingCode: '',
    country: '',
    description: '',
    additionalNotes: '',
    addedDate: new Date(Date.now()),
    addedBy: new Employee(0, '')
  };

  constructor(private router: Router,
              private customerService: CustomerService) {
  }

  getIsAddingACustomer(): boolean {
    return (this.router.url === '/customer/add');
  }

  ngOnInit(): void {
    if (this.getIsAddingACustomer()) {
      this.initializeCustomerObject();
      // (this.nameInputElement.nativeElement as HTMLInputElement).focus();

    } else {
      if (this.customerService.customerToBeEdited) {
        this.customer = this.customerService.customerToBeEdited;
      }
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

  initializeCustomerObject(): void {
    this.customer = {
      id: 0,
      name: '',
      nationality: '',
      passportNo: '',
      email: '',
      phone: '',
      countryCallingCode: '',
      country: '',
      description: '',
      additionalNotes: '',
      addedDate: new Date(Date.now()),
      addedBy: new Employee(0, '')
    };
  }
}
