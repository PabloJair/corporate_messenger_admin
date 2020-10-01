import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService,
  private userService: UserService

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      console.log( '--->' + state.url)
    if (this.userService.getCurrentUser) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigateByUrl('/login');
    return false;
  }
}
