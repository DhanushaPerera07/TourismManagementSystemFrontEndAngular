import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainNavComponent} from './main-nav/main-nav.component';
import {SignInComponent} from './signin/sign-in.component';
import {CustomerComponent} from './customer/customer.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CustomerViewDataComponent} from './customer/customer-view-data/customer-view-data.component';
import {CustomerTableComponent} from './customer/customer-table/customer-table.component';
import {ManageCustomerComponent} from './customer/main/manage-customer/manage-customer.component';
import {ViewCustomerComponent} from './customer/main/view-customer/view-customer.component';
import {AddEditCustomerComponent} from './customer/main/add-edit-customer/add-edit-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainNavComponent,
    data: { breadcrumb: 'Home'}
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: { breadcrumb: 'Manage Customer'},
    children: [
      {
        path: '',
        component: ManageCustomerComponent,
        data: { breadcrumb: 'Customer list'}
      },
      {
        path: 'view/:id',
        component: ViewCustomerComponent,
        data: { breadcrumb: 'View'},
      },
      {
        path: 'add',
        component: AddEditCustomerComponent,
        data: { breadcrumb: 'Add'},
      },
      {
        path: 'edit/:id',
        component: AddEditCustomerComponent,
        data: { breadcrumb: 'Edit'},
      }
    ]
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
