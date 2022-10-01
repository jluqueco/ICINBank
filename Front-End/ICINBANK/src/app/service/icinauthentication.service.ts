import { Injectable } from '@angular/core';
import { User } from '../dashboard/dashboard.component';
import { UserDataService } from './data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ICINAuthenticationService {
  authenticateUser = false;
  user: User | undefined;
  constructor(private userDataService: UserDataService) { }

  authenticate(username: string, password: string){
    return this.userDataService.authenticateUser(username,password);
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

  isUserAdmin(username: string){
    return this.userDataService.getUser(username).subscribe(
      response => { 
        this.user = response
        console.log(response);
        if(this.user.userAdmin){
          console.log('from icin ' + this.user.userAdmin);
          return true;
        }else{
          return false;
        }
      }
    )
  }
}
