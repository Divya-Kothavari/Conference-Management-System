import { Injectable }       from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardAuthorService implements CanActivate {
  	
  constructor(private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
	if (window.localStorage.getItem('role') === 'Author') {
		return true; 
	} else {
        return false;
    }
  }
  
} 