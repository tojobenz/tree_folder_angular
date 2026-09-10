import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate{
    constructor(private userService: UserService, public router: Router) {}
    
    canActivate(): Observable<boolean | UrlTree> {
        // Check if user is logged in first
        if (!this.userService.getProfile) {
            this.router.navigate(['login']);
            return of(false);
        }

        return this.userService.getProfile().pipe(
            map(data => {
                if (data.roles === "1") {
                    return true;
                }
                this.router.navigate(['explorer']);
                return false;
            }),
            catchError(() => {
                this.router.navigate(['login']);
                return of(false);
            })
        );
    }
}
