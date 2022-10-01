import { Component, OnInit } from '@angular/core';
import { faPiggyBank, faUser } from '@fortawesome/free-solid-svg-icons';
import { ICINAuthenticationService } from '../service/icinauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faCoffee = faPiggyBank;
  faUser= faUser;
  isUserLoggedIn = false;
  user: string | null = '';

  constructor(public authenticationService: ICINAuthenticationService) { }

  ngOnInit(): void {
    
  }

  userloggedIn(){
    this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
    if(this.isUserLoggedIn){
      this.user = this.authenticationService.getUserLoggedIn();
    }

    return this.isUserLoggedIn;
  }

}
