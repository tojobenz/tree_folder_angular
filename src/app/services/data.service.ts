import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Item} from '../models/item';
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
        isFolder: true,
        parent: 0,
        path: 'Folder 1'
      },
      {
        title: 'Folder 2',
        id: 2,
        cabinet_id:1,
        isFolder: true,
        parent: 0,
        path: 'Folder 2'
      }
    ])
  }

}
