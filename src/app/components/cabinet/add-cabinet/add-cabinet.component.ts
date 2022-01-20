import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-cabinet',
  templateUrl: './add-cabinet.component.html',
  styleUrls: ['./add-cabinet.component.css']
})
export class AddCabinetComponent implements OnInit {

  private cabinet: any;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

constructor(private token: TokenStorageService,private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.postCabinet(this.form).subscribe(
      data => {
        let new_text = this.form.name.split(' ').join('_');
        let feed = {
          title: this.form.name,
          parent: 0,
          path:  new_text,
          isFolder: true,
          cabinet_id: null,
        };
        this.userService.getCabinetID(this.form.name).subscribe(d => {
          console.log(d)
          let folder = {
            title: this.form.name,
            parent: 0,
            path:  new_text,
            isFolder: true,
            cabinet_id: d[0].id,
          };
          this.userService.postFolder(folder).subscribe(c => {
            console.log(c);
          });
        })

        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
