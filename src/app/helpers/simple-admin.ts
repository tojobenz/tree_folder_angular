import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { UserService } from '../services/user.service';
@Injectable({
  providedIn: 'root'
})

export class SimpleAdmin implements CanActivate{
    private session = false;
    constructor(private userService: UserService, public router: Router) {}
    canActivate(): boolean {

        this.userService.getProfile().subscribe(data => {
            if (data.roles === "1" || data.roles ==="3") {
              this.session =  true;
              return this.session;
            } else if (data.roles === "2"){
              this.router.navigate(['explorer']);
            }
            this.router.navigate(['login']);
          });
          return this.session;
    }
    
}
