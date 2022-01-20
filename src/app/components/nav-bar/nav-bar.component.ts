import { Component, OnInit } from '@angular/core';
import { cpuUsage } from 'process';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isAdmin = false;
superAdmin = false;
  constructor( private tokenStorageService: TokenStorageService, private userService: UserService) { 

  }

  ngOnInit() {
this.userService.getProfile().subscribe(data => {
  if (data.roles === "3" ) {
    this.isAdmin = true
  } else if (data.roles === "1") {
  this.superAdmin = true;}
})
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
