import { Injectable } from '@angular/core';
import { UserDataService } from './data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ICINAuthenticationService {
  authenticateUser = false;
  constructor(private userDataService: UserDataService) { }

  authenticate(username: string, password: string){
    return this.userDataService.authenticateUser(username,password).subscribe(
      response => {
        this.authenticateUser = response;
        return this.authenticateUpdate(username);
        
      }
    )
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');

    return !(user === null);
  }

  getUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');

    return user;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  authenticateUpdate(username: string){
    if(this.authenticateUser) {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }else{
      return false;
    }
  }
}
