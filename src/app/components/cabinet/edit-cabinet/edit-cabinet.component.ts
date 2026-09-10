import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as CryptoJS from 'crypto-js';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-edit-cabinet',
  templateUrl: './edit-cabinet.component.html',
  styleUrls: []
})
export class EditCabinetComponent implements OnInit {

  currentData: any = {};;
  message = '';
  tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  decrypted: string;
  oldCabinet: string;
  idCabinet: number;
  load = false;
  constructor(
    private token: TokenStorageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

   let decrypt = CryptoJS.AES.decrypt(
      id, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);


    this.userService.editCabinet(decrypt)
      .subscribe(
        data => {
          this.currentData = data;
          this.oldCabinet = data.name;
          this.idCabinet = Number(data.id);
        },
        error => {
          console.error('Error loading cabinet:', error);
        });
  }


  updateUser() {
    this.load = true;
    this.userService.getFolderCabinet(this.idCabinet).subscribe(data=> {
      for( let i =0; i< data.length; i++) {
        if(data[i].path.includes('/')) {
          let path = this.currentData.name.split(' ').join('_')+ '/' + data[i].path.substr(data[i].path.indexOf('/') + 1);
            let feed = {
              path: path,
              oldpath: data[i].path
            };
           this.userService.updateFolder(data[i].id,feed).subscribe({
             next: () => {
               // Update successful
             },
             error: (error) => {
               console.error('Error updating folder:', error);
             }
          }); 
         } else {
          let path = this.currentData.name.split(' ').join('_');
            let feed = {
              title: this.currentData.name,
              path: path,
              oldpath: data[i].path
            };
           this.userService.updateFolder(data[i].id,feed).subscribe({
             next: () => {
               // Update successful
             },
             error: (error) => {
               console.error('Error updating folder:', error);
             }
          }); 
         }
      }
      this.load = false;
    }) 

 
    this.userService.updateCabinet(this.currentData.id, this.currentData)
      .subscribe(
        response => {
          this.message = 'Succès de la modification';
          this.load = false;
        },
        error => {
          console.error('Error updating cabinet:', error);
          this.load = false;
        }); 
  }
}
