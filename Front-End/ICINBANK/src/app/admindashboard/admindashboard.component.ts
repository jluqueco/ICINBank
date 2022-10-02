import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUsers, faPiggyBank, faMoneyCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  username = '';
  faUsers = faUsers;
  faPiggyBank = faPiggyBank;
  faMoneyCheck = faMoneyCheck;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
  }

}
