import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './signin/sign-in.component';
import {CustomerComponent} from './customer/customer.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ManageCustomerComponent} from './customer/main/manage-customer/manage-customer.component';
import {ViewCustomerComponent} from './customer/main/view-customer/view-customer.component';
import {AddEditCustomerComponent} from './customer/main/add-edit-customer/add-edit-customer.component';
import {HomeComponent} from './home/home.component';
import {AccommodationComponent} from './accommodation/accommodation.component';
import {ManageAccommodationComponent} from './accommodation/main/manage-accommodation/manage-accommodation.component';
import {AddEditAccommodationComponent} from './accommodation/main/add-edit-accommodation/add-edit-accommodation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {breadcrumb: 'Home'},
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: {breadcrumb: 'Manage Customer'},
    children: [
      {
        path: 'add',
        component: AddEditCustomerComponent,
        data: {breadcrumb: 'Add'},
      },
      {
        path: 'edit/:id',
        component: AddEditCustomerComponent,
        data: {breadcrumb: 'Edit'},
      },
      {
        path: ':id',
        component: ViewCustomerComponent,
        data: {breadcrumb: 'Details'},
      },
      {
        path: '',
        component: ManageCustomerComponent,
        data: {breadcrumb: 'Customer list'}
      }
    ]
  },
  {
    path: 'accommodation',
    component: AccommodationComponent,
    data: {breadcrumb: 'Manage Accommodation'},
    children: [
      {
        path: 'add',
        component: AddEditAccommodationComponent,
        data: {breadcrumb: 'Add'}
      },
      {
        path: 'edit/:id',
        component: AddEditAccommodationComponent,
        data: {breadcrumb: 'Edit'}
      },
      {
        path: '',
        component: ManageAccommodationComponent,
        data: {breadcrumb: 'Manage Accommodation'}
      }
    ]
  },
  {
    path: 'destination',
    component: NotFoundComponent
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
