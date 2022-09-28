import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {

  constructor(private http: HttpClient) { }

  getTransactions(accountID: number){
    return this.http.get<Transaction[]>(`http://localhost:8080/transactionlist/${accountID}`);
  }
}
