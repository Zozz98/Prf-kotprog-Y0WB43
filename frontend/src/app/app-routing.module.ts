import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { ListBillsComponent } from './component/list-bills/list-bills.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuard } from './guard/auth.guard';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  {path:'',component: HomeComponent, canActivate:[AuthGuard]},
  {path:'login',component: LoginComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'listUsers', component: ListUsersComponent, canActivate:[AuthGuard]},
  {path:'listBills',component: ListBillsComponent, canActivate:[AuthGuard]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
