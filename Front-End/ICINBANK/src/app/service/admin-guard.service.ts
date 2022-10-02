import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ICINAuthenticationService } from './icinauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{
  user: string | null = ''
  constructor(private authenticationService: ICINAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
   
    if(this.authenticationService.isUserLoggedIn() && this.authenticationService.isUserAdmin() ){  
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
