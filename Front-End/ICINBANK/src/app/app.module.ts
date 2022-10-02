import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SearchTransactionPipe } from './search-transaction.pipe';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './logout/logout.component';
import { DepositComponent } from './deposit/deposit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserAdminDashboardComponent } from './user-admin-dashboard/user-admin-dashboard.component';
import { ChequeBookComponent } from './cheque-book/cheque-book.component';
import { ChequeBookMGMTComponent } from './cheque-book-mgmt/cheque-book-mgmt.component';
import { UserComponent } from './user/user.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ErrorComponent,
    TransactionListComponent,
    SearchTransactionPipe,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    UserProfileComponent,
    UserRegistrationComponent,
    UserAdminDashboardComponent,
    ChequeBookComponent,
    ChequeBookMGMTComponent,
    UserComponent,
    AdminAccountComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
