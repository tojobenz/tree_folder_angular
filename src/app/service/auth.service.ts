import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {environment} from './../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = (environment as any).urlApi;

  constructor(private http: HttpClient) { }
  private userLoggedIn = new BehaviorSubject(null);
  private isAdmin = new BehaviorSubject(null);

  getLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  getLoggedInValue(): boolean {
    return this.userLoggedIn.getValue();
  }

  setLoggedIn(val: boolean) {
    this.userLoggedIn.next(val);
  }

  getAdmin(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }

  getAdminValue(): boolean {
    return this.isAdmin.getValue();
  }

  setAdmin(val: boolean) {
    this.isAdmin.next(val);
  }
  login(credentials): Observable<any> {
    return this.http.post(this.url + 'auth/login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
  profile(): Observable<any> {
    return this.http.get(this.url + 'auth/profile');
  }


  register(user, password): Observable<any> {
    return this.http.post(this.url + 'auth/register', {
      name: user.name,
      email: user.email,
      password: password,
      check: user.check,
      cabinet_id: user.cabinet_id,
    }, httpOptions);
  }
}
