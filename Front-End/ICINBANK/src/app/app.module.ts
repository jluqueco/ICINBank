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
    DepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
