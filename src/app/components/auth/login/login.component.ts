import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { TokenStorageService } from '../../../service/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
 country: any;
 ip: any;
 load=  false;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public router: Router, public userService: UserService) { }

  ngOnInit() {
     if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    } 
    this.userService.getIp().subscribe(data =>{
      this.ip = data.ipAddress;
      this.country = data.countryName;
    })
  }

  

  onSubmit() {

    this.authService.login(this.form).subscribe(
      data => {
        this.load = true;
        this.tokenStorage.saveToken(data.access_token);
        this.authService.profile().subscribe((res:any) => {
          this.tokenStorage.saveUser(res);
          this.authService.setLoggedIn(true);
          this.authService.setAdmin(true);
  
            let feed= {
              name: this.tokenStorage.getUser().name,
              email: this.tokenStorage.getUser().email,
              country: this.country,
              ip: this.ip,
            }
            this.userService.historic(feed).subscribe(data => {
            });
          //this.roles = this.tokenStorage.getUser().roles;
          //this.router.navigate(['explorer'])
          this.load = false
          this.router.navigateByUrl('/explorer');
          this.isLoginFailed = false;
          this.isLoggedIn = true;
        }) 

        //this.reloadPage();
      },
      err => {
        this.load = false;
        this.errorMessage = err.error.error;
        this.isLoginFailed = true;
        
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
