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

  getAccountsButID(username: string, acc: number){
    return this.http.get<Account[]>(`http://localhost:8080/account/${username}/${acc}`);
  }

  deposit(accountID: number, amount: number, comment: string){
    return this.http.get<Transaction>(`http://localhost:8080/transaction/deposit/${accountID}/${amount}/${comment}`);
  }

  withdraw(accountID: number, amount: number, comment: string){
    return this.http.get<Transaction>(`http://localhost:8080/transaction/withdraw/${accountID}/${amount}/${comment}`);
  }

  transfer(accountIDOri: number, amount: number, accountIDDest:number, comment: string){
    if(comment === ''){
      return this.http.get<Transaction[]>(`http://localhost:8080/transaction/transfer/${accountIDOri}/${accountIDDest}/${amount}`);  
    }else{
      return this.http.get<Transaction[]>(`http://localhost:8080/transaction/transfer/${accountIDOri}/${accountIDDest}/${amount}/${comment}`);
    }
  }

  getAllAccounts(){
    return this.http.get<Account[]>(`http://localhost:8080/account/list`);
  }

  updateAccountStatus(account: Account){
    console.log(`http://localhost:8080/account/${account.accountID}/${account.blockStatus}`);
    return this.http.put<Account>(`http://localhost:8080/account/${account.accountID}/${!account.blockStatus}`,null);
  }

  createAccount(account: Account){
    return this.http.post<Account>(`http://localhost:8080/account/new`, account);
  }
}
