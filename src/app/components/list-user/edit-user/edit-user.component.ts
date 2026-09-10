import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as CryptoJS from 'crypto-js';
import generateUniqueId  from 'generate-unique-id';
import { SimpleModalService } from 'ngx-simple-modal';
import { DeleteComponent } from '../../modals/delete/delete.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: []
})
export class EditUserComponent implements OnInit {
  isSuccessful = false;
  currentData: any = {};;
  message = '';
  tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  decrypted: string;
  load = false;
  request: string;
  responce: string;
  constructor(
    private userService: UserService,private SimpleModalService: SimpleModalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

   let decrypt = CryptoJS.RC4.decrypt(
      id, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);


    this.userService.findUser(decrypt)
      .subscribe(
        data => {
          this.currentData = data;
        },
        error => {
          console.error('Error loading user:', error);
        });
  }


  updateUser() {
    this.load = true;
    this.userService.updateUser(this.currentData.id, this.currentData)
      .subscribe(
        response => {
          this.message = 'Succès de la modification';
          this.load = false;
          this.isSuccessful = true;
        },
        error => {
          console.error('Error updating user:', error);
          this.load = false;
        });
  }

  deleteTutorial() {
    this.SimpleModalService.addModal(DeleteComponent, {
      title: 'Confirmation',
      message: 'Confirmation du suppression'})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.load = true;
          this.userService.deleteUser(this.currentData.id)
          .subscribe(
            response => {
              this.load = false;
              this.message = 'Succès de la suppression';
              this.isSuccessful = true;
            },
            error => {
              console.error('Error deleting user:', error);
              this.load = false;
            }); 
        }
    });

 
  }
  uuid() {
    let password = generateUniqueId({
      length: 20,
      useLetters: true,
      useNumbers: true,
     // includeSymbols: ['@','_','|','-'],
      });
      this.currentData.password = password;
  }
}
