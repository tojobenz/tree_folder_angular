import { Component, OnInit } from '@angular/core';
import { cpuUsage } from 'process';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: []
})
export class NavBarComponent implements OnInit {
  isAdmin = false;
  superAdmin = false;
  isMenuOpen = false;
  username: string = '';

  constructor( private tokenStorageService: TokenStorageService, private userService: UserService) { 

  }

  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
      if (data.roles === "3" ) {
        this.isAdmin = true
      } else if (data.roles === "1") {
        this.superAdmin = true;
      }
      this.username = data.name || 'Utilisateur';
    })
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
