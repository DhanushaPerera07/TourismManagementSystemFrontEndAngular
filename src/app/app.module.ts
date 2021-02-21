import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {SignInComponent} from './signin/sign-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomerComponent} from './customer/customer.component';
import {MatDividerModule} from '@angular/material/divider';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignInComponent,
    CustomerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
