import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChequeBookComponent } from './cheque-book/cheque-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminGuardService } from './service/admin-guard.service';
import { RouteGuardService } from './service/route-guard.service';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserAdminDashboardComponent } from './user-admin-dashboard/user-admin-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
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
  {path: 'useradmindashboard/:username', component: UserAdminDashboardComponent, canActivate:[AdminGuardService]},
  {path: 'chequebook/:username', component: ChequeBookComponent, canActivate: [RouteGuardService]},
  {path: 'user/:username', component: UserComponent, canActivate:[AdminGuardService]},
  {path: 'adminaccount/:username', component: AdminAccountComponent, canActivate:[AdminGuardService]},
  {path: 'admindashboard/:username', component: AdmindashboardComponent, canActivate:[AdminGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
