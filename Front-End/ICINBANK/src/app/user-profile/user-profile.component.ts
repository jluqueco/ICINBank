import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, User } from '../dashboard/dashboard.component';
import { AccountDataService } from '../service/data/account-data.service';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: any;
  user!: User;
  accounts: Account[] = [];

  constructor(private router:ActivatedRoute, 
              private userData: UserDataService, 
              private accountData: AccountDataService,
              private route: Router) { }

  ngOnInit(): void {
    this.username = this.router.snapshot.params['username'];
    this.userData.getUser(this.username).subscribe(
      response => {
        console.log(response);
        this.user = response;
      }
    )
    this.accountData.getAccounts(this.username).subscribe(
      response => {
        console.log(response);
        this.accounts = response;
      }
    )
  }

  handleClick() {
    this.route.navigate(['dashboard', this.username]);
  }
    

}
