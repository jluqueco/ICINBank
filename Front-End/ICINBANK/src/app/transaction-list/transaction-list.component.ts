import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../dashboard/dashboard.component';
import { TransactionDataService } from '../service/data/transaction-data.service';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  accountID = 0;
  transactions: Transaction[] = [];
  public searchTransaction: any = '';
  query = '';

  constructor(private router:ActivatedRoute, private transactionData: TransactionDataService) { }

  ngOnInit(): void {
    this.accountID = this.router.snapshot.params['accountID'];
    this.transactionData.getTransactions(this.accountID).subscribe(
      response => {
        this.transactions = response;
      }
    )
  }

}
