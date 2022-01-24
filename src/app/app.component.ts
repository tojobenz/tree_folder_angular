import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import {Observable} from 'rxjs'
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.authService.getLoggedIn().subscribe(value => {
      if( value != null) {
        this.isLoggedIn = value;
      }
  });

  }


}
