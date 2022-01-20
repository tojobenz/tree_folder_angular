import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {Router} from "@angular/router";
import * as CryptoJS from 'crypto-js';
import { DeleteComponent } from '../modals/delete/delete.component';
import { SimpleModalService } from 'ngx-simple-modal';
@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
 users: any;
 tokenFromUI: string = "0123456789123456";
 encrypted: any = "";
 decrypted: string;

 currentIndex = -1;
 page = 1;
 pageSize = 5;
 pageSizes = [5,10,15,20,30,40];
 load=  false;


  constructor(private router: Router, private userService: UserService, private SimpleModalService: SimpleModalService,) { }

  ngOnInit() {
    this.list();
  }
  list() {
    this.userService.getCabinet()
    .subscribe( data => {
      this.users = data;
    });
  }


  
  deleteUser(cab): void {

    this.SimpleModalService.addModal(DeleteComponent, {
      title: 'Suppression',
      message: 'Confirmer la suppression'})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.userService.deleteCabinet(cab.id)
          .subscribe( data => {
            var removeIndex = this.users.map(item => item.id)
            .indexOf(cab.id);
        ~removeIndex && this.users.splice(removeIndex, 1);
          });
    
          this.userService.deleteCabinet(cab.id).subscribe(data=> {
            console.log(data)
          }) 
            let feed = {
              path: cab.name.split(' ').join('_'),
              isFolder: 1
            }
            this.userService.deleteFolderCabinet(cab.id).subscribe(data => {
              console.log(data);
            });   
               this.userService.removeFolder(feed).subscribe(data => {
              console.log(data);
            });  
    
        }
    });


    
  };

  addCabinet(): void {
    this.router.navigate(['new-cabinet']);
  };
  editCabinet(id) {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(id), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    this.router.navigate(['edit-cabinet/' + encrypted]);
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

  searchTitle(val) {
   
    this.users = this.users.filter(x => x.name === val);
    console.log(this.users);

  }
  refresh() {
    this.list();
  }

}
