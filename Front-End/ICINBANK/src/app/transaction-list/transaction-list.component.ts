import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Transaction{
  constructor(
    public type: String,
    public balance: number,
    public balanceAfterTran: number,
    public amount: number,
    public tranDate: Date,
    public comments: String
  ){}
}
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  accountID = 0;
  username = 'jluqueco'
  transactions =[
    new Transaction('Deposit',1000,1100,100,new Date(),'Comentando 1'),
    new Transaction('Withdraw',1100,1000,100,new Date(),'Comentando 2'),
    new Transaction('Transfer',1000,1100,100,new Date(),'Comentando 3')
  ]
  public searchTransaction: any = '';
  query = '';

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.accountID = this.router.snapshot.params['accountID'];
  }

}
