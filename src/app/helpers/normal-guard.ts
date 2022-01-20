import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate{
    constructor(private token: TokenStorageService, public router: Router) {}
    canActivate(): boolean {
      if (!this.token.getUser()) {
        this.router.navigate(['login']);
        return false;
      }
      
      return true;
    }
}
