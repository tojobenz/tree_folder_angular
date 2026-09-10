import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';


export interface PromptModel {
  title:string;
  question:string;
  message: string;
}

@Component({
  selector: 'app-rename-folder',
  templateUrl: './rename-folder.component.html',
  styleUrls: []
})
export class RenameFolderComponent extends SimpleModalComponent<PromptModel, string> implements PromptModel {
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
