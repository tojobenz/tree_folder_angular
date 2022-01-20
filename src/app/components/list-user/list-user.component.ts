import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  decrypted: string;

  request: string;
  responce: string;
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  page = 1;
  pageSize = 10;
  pageSizes = [10,15,20,30,40];
 

  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.userService.getUser()
      .subscribe(
        data => {
          this.tutorials = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.list();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }


  searchTitle(val) {
    this.tutorials = this.tutorials.filter(x => x.email === val);

  }
  editUser(id) {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = CryptoJS.RC4.encrypt(
      JSON.stringify(id), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.Pkcs7
      });
    this.router.navigate(['edit-user/' + encrypted]);
  }

  handlePageChange(event) {
    this.page = event;
    this.list();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.list();
  }

  refresh() {
    this.list();
  }
}
