import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface NewFolderModel {
  title: string;
  question: string;
}

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: []
})
export class NewFolderComponent extends SimpleModalComponent<NewFolderModel, string> implements NewFolderModel {
  title: string;
  question: string;
  message: string = '';

  constructor() {
    super();
  }

  apply(): void {
    if (this.message.trim()) {
      this.result = this.message;
      this.close();
    }
  }

  cancel(): void {
    this.close();
  }

  isValid(): boolean {
    return this.message.trim().length > 0;
  }
}
