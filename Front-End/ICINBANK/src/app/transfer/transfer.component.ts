import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, Transaction } from '../dashboard/dashboard.component';
import { AccountDataService } from '../service/data/account-data.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  fromAcc: any;
  toAcc: any;
  accounts: Account[] = [];
  accountsTo: Account[] = [];
  username = ''
  amount: number = 0;
  comment: string = '';
  transaction: Transaction[] = [];
  successful: boolean = false;
  tranOri!: Transaction;

  constructor(private activatedRoute: ActivatedRoute, 
    private accountData: AccountDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
    this.accountData.getAccounts(this.username).subscribe(
      data => {
        this.accounts = data;
      }
    )
  }

  transfer() {
    if(this.fromAcc > 0 && this.toAcc > 0){
      this.accountData.transfer(this.fromAcc, this.amount, this.toAcc, this.comment).subscribe(
        response => {
          this.transaction = response;
          this.successful = true;
          this.fromAcc = 0;
          this.toAcc = 0;
          this.amount = 0;
          this.comment = '';
          this.tranOri = this.transaction[0];
        }
      )
    }
  }

  onChange($event: any) {
    this.accountData.getAccountsButID(this.username, this.fromAcc).subscribe(
      data => {
        this.accountsTo = data;
      }
    )
  }
}
