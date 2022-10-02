import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../dashboard/dashboard.component';
import { AccountDataService } from '../service/data/account-data.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  username = '';
  accounts: Account[] = [];
  success = false;
  constructor(
    private route: ActivatedRoute,
    private accountData: AccountDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.snapshot.params['username'];
    this.accountData.getAllAccounts().subscribe(
      response => {
        this.accounts = response;
      }
    )
  }

  updateAccount(account: Account) {
    console.log(account)
    this.accountData.updateAccountStatus(account).subscribe(
      response => {
        console.log(response);
        this.success = true;
      }
    )
  }

  createAccount() {
      this.router.navigate(['account']);
    }
    

}
