import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  load = false;
  country: string | null = null;
  ip: string | null = null;

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    public router: Router, 
    public userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorage.getUser();
      if (user) {
        this.authService.setLoggedIn(true);
        this.authService.setAdmin(user.roles === '1');
      }
    }
    
    // Récupérer les infos IP pour l'historique
    this.userService.getIp().pipe(
      catchError(() => of({ ipAddress: 'unknown', countryName: 'unknown' }))
    ).subscribe(data => {
      this.ip = data.ipAddress;
      this.country = data.countryName;
    });
  }

  onSubmit(): void {
    this.load = true;
    this.errorMessage = '';

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        
        this.authService.profile().subscribe(
          (user: any) => {
            this.tokenStorage.saveUser(user);
            this.authService.setLoggedIn(true);
            this.authService.setAdmin(user.roles === '1');
    
            // Enregistrer l'historique de connexion
            this.recordLoginHistory(user);
    
            this.load = false;
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.router.navigate(['/explorer']);
          },
          error => {
            this.load = false;
            this.errorMessage = 'Erreur lors de la récupération du profil';
            this.isLoginFailed = true;
          }
        );
      },
      err => {
        this.load = false;
        this.errorMessage = err.error && err.error.error ? err.error.error : 'Erreur de connexion';
        this.isLoginFailed = true;
      }
    );
  }

  private recordLoginHistory(user: any): void {
    const loginData = {
      name: user.name,
      email: user.email,
      country: this.country || 'unknown',
      ip: this.ip || 'unknown',
    };
    
    this.userService.historic(loginData).pipe(
      catchError(error => {
        console.error('Failed to record login history:', error);
        return of(null);
      })
    ).subscribe();
  }
}
