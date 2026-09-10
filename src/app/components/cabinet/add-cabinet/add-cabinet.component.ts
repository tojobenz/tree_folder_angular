import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-cabinet',
  templateUrl: './add-cabinet.component.html',
  styleUrls: []
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
          const maxId = 1; // Temporary ID, will be replaced by backend
          let folder = {
            id: maxId,
            title: this.form.name,
            parent: 0,
            path:  new_text,
            isFolder: true,
            cabinet_id: d[0].id,
          };
          this.userService.postFolder(folder).subscribe({
            next: () => {
              // Folder created successfully
            },
            error: (error) => {
              console.error('Error creating folder:', error);
            }
          });
        }, error => {
          console.error('Error getting cabinet ID:', error);
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
