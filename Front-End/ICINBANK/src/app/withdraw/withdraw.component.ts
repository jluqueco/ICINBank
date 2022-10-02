import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, Transaction } from '../dashboard/dashboard.component';
import { AccountDataService } from '../service/data/account-data.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  accounts: Account[] = [];
  username = ''
  accselected: number = 0;
  amount: number = 0;
  comment: string = '';
  transaction!: Transaction;
  successful: boolean = false;

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

  withdraw(){
    if(this.comment === ''){
      this.comment = 'None'
    }
    
    if(this.accselected > 0){
      this.accountData.withdraw(this.accselected, this.amount, this.comment).subscribe(
        response => {
          this.transaction = response;
          this.successful = true;
          this.accselected = 0;
          this.amount = 0;
          this.comment = '';
        }
      )
    }
  }

}
