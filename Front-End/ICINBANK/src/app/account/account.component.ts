import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account, User } from '../dashboard/dashboard.component';
import { AccountDataService } from '../service/data/account-data.service';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
accselected: any;
accounts: Account[] = [];
userSelected: any;
account!: Account;
user!: User;

  users: User[] = [];
  constructor(
      private accountData:AccountDataService,
      private userData: UserDataService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.userData.retreiveUsers().subscribe(
      response => {
        this.users = response;
      }
    )
  }

  registerAccount(username: string){
    return this.userData.getUser(username).subscribe(
      response => {
        console.log(response);
        this.user = response;
        this.account = new Account(0,0,response,[],false,this.accselected);
        this.accountData.createAccount(this.account).subscribe(
          response => {
            console.log(response);
            this.router.navigate(['adminaccount', username]);
          }
        )
      }
    )
  }

}
