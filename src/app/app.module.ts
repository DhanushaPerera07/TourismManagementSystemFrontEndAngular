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
import {CustomerTableComponent} from './customer/component/customer-table/customer-table.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CustomerViewDataComponent} from './customer/component/customer-view-data/customer-view-data.component';
import {CustomerSearchTableComponent} from './customer/component/customer-search-table/customer-search-table.component';
import {ManageCustomerComponent} from './customer/main/manage-customer/manage-customer.component';
import {ViewCustomerComponent} from './customer/main/view-customer/view-customer.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from 'angular-crumbs';
import {FormatPhoneNumberPipe} from './pipe/format-phone-number.pipe';
import {AddEditCustomerComponent} from './customer/main/add-edit-customer/add-edit-customer.component';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {DashboardBoxComponent} from './home/dashboard/dashboard-box/dashboard-box.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {EmployeeComponent} from './employee/employee.component';
import {ProfilePictureComponent} from './employee/profile-picture/profile-picture.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeLoginCredentialsComponent} from './employee/change-login-credentials/change-login-credentials.component';
import {ToEmployeeIdPipe} from './pipe/to-employee-id.pipe';
import {AccommodationComponent} from './accommodation/accommodation.component';
import {ManageAccommodationComponent} from './accommodation/main/manage-accommodation/manage-accommodation.component';
import {AddEditAccommodationComponent} from './accommodation/main/add-edit-accommodation/add-edit-accommodation.component';
import {AccommodationSearchTableComponent} from './accommodation/component/accommodation/accommodation-search-table/accommodation-search-table.component';
import {AccommodationTableComponent} from './accommodation/component/accommodation/accommodation-table/accommodation-table.component';
import {NavigationComponent} from './main-nav/navigation/navigation.component';
import { ViewAccommodationComponent } from './accommodation/main/view-accommodation/view-accommodation.component';
import { AccommodationViewDataComponent } from './accommodation/component/accommodation/accommodation-view-data/accommodation-view-data.component';
import { AccommodationPackageSearchTableComponent } from './accommodation/component/accommodation-package/accommodation-package-search-table/accommodation-package-search-table.component';
import { AccommodationPackageTableComponent } from './accommodation/component/accommodation-package/accommodation-package-table/accommodation-package-table.component';
import { AccommodationPackageViewDataComponent } from './accommodation/component/accommodation-package/accommodation-package-view-data/accommodation-package-view-data.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddEditAccommodationPackageComponent } from './accommodation/component/accommodation-package/add-edit-accommodation-package/add-edit-accommodation-package.component';

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
    ProfilePictureComponent,
    ChangeLoginCredentialsComponent,
    ToEmployeeIdPipe,
    AccommodationComponent,
    ManageAccommodationComponent,
    AddEditAccommodationComponent,
    AccommodationSearchTableComponent,
    AccommodationTableComponent,
    NavigationComponent,
    ViewAccommodationComponent,
    AccommodationViewDataComponent,
    AccommodationPackageSearchTableComponent,
    AccommodationPackageTableComponent,
    AccommodationPackageViewDataComponent,
    AddEditAccommodationPackageComponent
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
    MatTabsModule,
    BreadcrumbModule  // breadcrumbs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
