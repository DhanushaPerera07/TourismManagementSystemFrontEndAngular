import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainNavComponent} from './main-nav/main-nav.component';
import {SignInComponent} from './signin/sign-in.component';

const routes: Routes = [
  {path: 'home', component: MainNavComponent},
  {path: 'signin', component: SignInComponent},
  {path: '', redirectTo: '/signin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
