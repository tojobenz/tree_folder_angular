import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';
@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate{
    private session = false;
    constructor(private userService: UserService, public router: Router) {}
    canActivate(): boolean {

        this.userService.getProfile().subscribe(data => {
            if (data.roles === "1") {
              this.session =  true;
              return this.session;
            }
            this.router.navigate(['explorer']);
          });
          return this.session;
    }
    
}
