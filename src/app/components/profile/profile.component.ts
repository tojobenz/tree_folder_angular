import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService, private authService: AuthService) { }

  ngOnInit() {

    this.currentUser = this.token.getUser();
  }
}
