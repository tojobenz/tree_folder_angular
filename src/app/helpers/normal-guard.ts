import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate{
    constructor(private token: TokenStorageService, public router: Router) {}
    canActivate(): boolean | UrlTree {
      const user = this.token.getUser();
      if (!user) {
        return this.router.createUrlTree(['login']);
      }
      
      return true;
    }
}
