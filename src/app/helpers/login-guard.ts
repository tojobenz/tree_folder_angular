import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{
    private session;
    isLoggedin: boolean;
    constructor(private token: TokenStorageService, public router: Router) {}
    canActivate(): boolean | UrlTree {
      const user = this.token.getUser();
      if (!user) {
        return true;
      }
      return this.router.createUrlTree(['explorer']);
    }
    
}
