import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, Transaction } from 'src/app/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private http: HttpClient) { }

  getAccounts(username: string){
    return this.http.get<Account[]>(`http://localhost:8080/account/${username}`);
  }

  deposit(accountID: number, amount: number, comment: string){
    return this.http.get<Transaction>(`http://localhost:8080/transaction/deposit/${accountID}/${amount}/${comment}`);
  }
}
