import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainNavComponent} from './main-nav/main-nav.component';
import {SignInComponent} from './signin/sign-in.component';
import {CustomerComponent} from './customer/customer.component';
import {NotFoundComponent} from './not-found/not-found.component';

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
    component: CustomerComponent
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
