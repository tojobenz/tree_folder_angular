import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Item} from '../model/item';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFlatData() : Observable<Item[]>{
    return of<Item[]>([
      {
        title: 'Folder 1',
        id: 1,
        cabinet_id:1,
        isFolder: 1,
        parent: 0,
        path: 'Folder 1'
      },
      {
        title: 'Folder 2',
        id: 2,
        cabinet_id:1,
        isFolder: 1,
        parent: "0",
        path: 'Folder 2'
      },/* 
      {
        title: 'File 2.1',
        id: 3,
        parent: 2,
        cabinet_id:1,
        isFolder: true,
      },
      {
        title: 'Folder 2.2',
        id: 33,
        parent: 2,
        cabinet_id:1,
        isFolder: true,
      },
      {
        title: 'Folder 2.2.1',
        id: 4,
        parent: 33,
        cabinet_id:1,
        isFolder: true,
      },
     */
    ])
  }

}
