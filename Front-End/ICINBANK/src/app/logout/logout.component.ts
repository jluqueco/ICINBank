import { Component, OnInit } from '@angular/core';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { ICINAuthenticationService } from '../service/icinauthentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  faPiggyBank = faPiggyBank;
  constructor(private authenticationService: ICINAuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.logout();
  }

  

}
