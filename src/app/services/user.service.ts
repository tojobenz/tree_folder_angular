import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Item } from '../models/item';
import { User } from '../models/user';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpDownload = {
  headers: new HttpHeaders({ 'Content-Type': 'application/pdf' })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = (environment as any).urlApi;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getTokenStorage(): TokenStorageService {
    return this.tokenStorage;
  }

  getCabinet(): Observable<any> {
    return this.http.get(this.url + 'auth/cabinet');
    
  }

  getCabinetID(name: string): Observable<any> {
    return this.http.get<any>(this.url + 'auth/cabinet-name/'+name);
  }

  deleteCabinet(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'auth/cabinet-delete/'+id);
  }

  editCabinet(id: number): Observable<any> {
    return this.http.get<any>(this.url + 'auth/cabinet-edit/'+id);
  }

  updateCabinet(id: number, data: any): Observable<any> {
    return this.http.put<any>(this.url + 'auth/cabinet-update/'+id, data);
  }


  postCabinet(cabinet: { name: string }): Observable<any> {
    return this.http.post(this.url + 'auth/cabinet', {
      name: cabinet.name,
    }, httpOptions);
    
  }
  getFolder(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + 'auth/listFolder');
    
  }
  
  getFolderCabinet(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + 'auth/listFolder/'+id);
  }
  getCabinetUser(id: number): Observable<any> {
    return this.http.get<any>(this.url + 'auth/cabinet/'+id);
  }
  downloadFile(path: string): Observable<Blob> {
    return this.http.get(this.url +'auth/download/' + path, { responseType: 'blob' });
  }
  showPdf(path: string): Observable<Blob> {
    return this.http.get(this.url +'auth/showPdf/' + path, { responseType: 'blob' });
  }

  postFolder(folder: Item): Observable<any> {
    return this.http.post(this.url + 'auth/createFolder', {
      title: folder.title,
      parent: folder.parent,
      path: folder.path,
      isFolder: folder.isFolder,
      cabinet_id: folder.cabinet_id,
    }, httpOptions);
    
  }

  upload(data: FormData): Observable<any> {
    return this.http.post<any>(this.url + 'auth/upload', data);
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(this.url + 'auth/profile');
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'auth/list-user');
  }
  updatePassword(id: number, data: any): Observable<User> {
    return this.http.post<any>(this.url + 'auth/change-password/' + id, data);
  }
  updateUser(id: number, data: any): Observable<User> {
    return this.http.put<any>(this.url + 'auth/update-user/' + id, data);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'auth/delete-user/'+id);
  }
  findUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + 'auth/find-user/'+id);
  }
  updateFolder(id: number, data: any): Observable<any> {
    return this.http.put<any>(this.url + 'auth/update-folder/' + id, data);
  }
  deleteFolder(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'auth/delete-folder/' + id);
  }
  deleteFolderCabinet(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'auth/delete-folder-cabinet/' + id);
  }
  removeFolder(data: any): Observable<any> {
    return this.http.post<any>(this.url + 'auth/remove-folder', data, httpOptions);
  }
  emailForgot(data: any): Observable<any> {
    return this.http.post<any>(this.url + 'auth/emailForgot', data, httpOptions);
  }
  getIp(): Observable<any> {
    return this.http.get('https://api.db-ip.com/v2/free/self');
  }
  historic(data: any): Observable<any> {
    return this.http.post<any>(this.url + 'auth/historic', data, httpOptions);
  }
  listHistoric(): Observable<any> {
    return this.http.get<any>(this.url + 'auth/list-historic');
    
  }
}
