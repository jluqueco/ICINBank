import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserAdminDashboardComponent } from './user-admin-dashboard/user-admin-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard/:username', component: DashboardComponent, canActivate:[RouteGuardService]},
  {path: 'transactionlist/:accountID', component: TransactionListComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: 'deposit/:username', component: DepositComponent, canActivate:[RouteGuardService]},
  {path: 'withdraw/:username', component: WithdrawComponent, canActivate:[RouteGuardService]},
  {path: 'transfer/:username', component: TransferComponent, canActivate:[RouteGuardService]},
  {path: 'userprofile/:username', component: UserProfileComponent, canActivate:[RouteGuardService]},
  {path: 'userregistration', component: UserRegistrationComponent},
  {path: 'useradmindashboard/:username', component: UserAdminDashboardComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
