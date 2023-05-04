import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { ListBillsComponent } from './component/list-bills/list-bills.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { RegistrationService } from './service/registration.service';
import { ErrorComponent } from './component/error/error.component';
import { CreateBillComponent } from './component/create-bill/create-bill.component';
import { BillService } from './service/bill.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
   
    ListUsersComponent,
    ListBillsComponent,
    ErrorComponent,
    CreateBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,
    RegistrationService,
    BillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
