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

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainNavComponent
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: ManageCustomerComponent
      },
      {
        path: 'view/:id',
        component: ViewCustomerComponent
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
