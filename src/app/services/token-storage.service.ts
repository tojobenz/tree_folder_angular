import { Injectable } from '@angular/core';
import { from } from 'rxjs';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    sessionStorage.clear();
  }

  public saveToken(token: string) {
    
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }
  

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {

    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    if (sessionStorage.getItem(USER_KEY)) {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    } else {
      return 0;
    }
    //return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
