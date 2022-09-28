import { Component, OnInit } from '@angular/core';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { ICINAuthenticationService } from '../service/icinauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faCoffee = faPiggyBank;
  isUserLoggedIn = false;

  constructor(public authenticationService: ICINAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
  }

}
