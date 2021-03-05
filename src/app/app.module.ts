import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {SignInComponent} from './signin/sign-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomerComponent} from './customer/customer.component';
import {MatDividerModule} from '@angular/material/divider';
import {NotFoundComponent} from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import { CustomerTableComponent } from './customer/customer-table/customer-table.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CustomerViewDataComponent } from './customer/customer-view-data/customer-view-data.component';
import { CustomerSearchTableComponent } from './customer/customer-search-table/customer-search-table.component';
import { ManageCustomerComponent } from './customer/main/manage-customer/manage-customer.component';
import { ViewCustomerComponent } from './customer/main/view-customer/view-customer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { FormatPhoneNumberPipe } from './pipe/format-phone-number.pipe';
import { AddEditCustomerComponent } from './customer/main/add-edit-customer/add-edit-customer.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { DashboardBoxComponent } from './home/dashboard/dashboard-box/dashboard-box.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';
import { ProfilePictureComponent } from './employee/profile-picture/profile-picture.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignInComponent,
    CustomerComponent,
    NotFoundComponent,
    CustomerTableComponent,
    CustomerViewDataComponent,
    CustomerSearchTableComponent,
    ManageCustomerComponent,
    ViewCustomerComponent,
    BreadcrumbComponent,
    FormatPhoneNumberPipe,
    AddEditCustomerComponent,
    HomeComponent,
    DashboardComponent,
    DashboardBoxComponent,
    EmployeeComponent,
    ProfilePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, // autocomplete
    MatDividerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    BreadcrumbModule  // breadcrumbs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
