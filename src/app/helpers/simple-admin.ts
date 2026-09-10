import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
@Injectable({
  providedIn: 'root'
})

export class SimpleAdmin implements CanActivate{
    constructor(private userService: UserService, public router: Router) {}
    
    canActivate(): Observable<boolean | UrlTree> {
        return this.userService.getProfile().pipe(
            map(data => {
                if (data.roles === "1" || data.roles === "3") {
                    return true;
                } else if (data.roles === "2") {
                    this.router.navigate(['explorer']);
                    return false;
                }
                this.router.navigate(['login']);
                return false;
            }),
            catchError(() => {
                this.router.navigate(['login']);
                return of(false);
            })
        );
    }
}
