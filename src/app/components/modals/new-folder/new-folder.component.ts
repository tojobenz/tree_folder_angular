import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';


export interface PromptModel {
  title:string;
  question:string;
}

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.css']
})
export class NewFolderComponent extends SimpleModalComponent<PromptModel, string> implements PromptModel {
  title: string;
  question: string;
  message: string = '';
  constructor() {
    super();
  }
  apply() {
    this.result = this.message;
    this.close();
  }
  fermer() {
    this.close();
  }
}

