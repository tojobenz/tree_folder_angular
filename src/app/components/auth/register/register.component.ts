import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../services/auth.service';
import generateUniqueId  from 'generate-unique-id';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  private cabinet: any;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  load = false;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.getListCabinet();
  }

  onSubmit() {
    this.load = true;
    const password = generateUniqueId({
      length: 20,
      useLetters: true,
      useNumbers: true,
      //includeSymbols: ['_','|','-'],
      //excludeSymbols: ['-','#']
      });
    this.authService.register(this.form, password).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.load = false;
      },
      err => {
        this.load = false;
        this.errorMessage = "Changer l'email";
        this.isSignUpFailed = true;
      }
    );
  }

  getListCabinet() {
    return this.userService.getCabinet().subscribe((data: {}) => {
      this.cabinet = data;
    });
  }

}
