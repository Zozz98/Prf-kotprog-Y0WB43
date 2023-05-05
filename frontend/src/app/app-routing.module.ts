import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { ListBillsComponent } from './component/list-bills/list-bills.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuard } from './guard/auth.guard';
import { ErrorComponent } from './component/error/error.component';
import { CreateBillComponent } from './component/create-bill/create-bill.component';
import { UpdateBillComponent } from './component/update-bill/update-bill.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';

const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent },
    {path: 'registration', component: RegistrationComponent },
    {path: 'listUsers',component: ListUsersComponent,canActivate: [AuthGuard]},
    {path: 'listBills',component: ListBillsComponent,canActivate: [AuthGuard]},
    {path: 'createBill',component: CreateBillComponent,canActivate: [AuthGuard]},
    {path: 'updateBill/:id', component:UpdateBillComponent},
    {path: 'updateUser/:id', component:UpdateUserComponent},
    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
