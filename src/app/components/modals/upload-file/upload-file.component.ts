import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';


export interface PromptModel {
  title:string;
  question:string;
}
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  extends SimpleModalComponent<PromptModel, any> implements PromptModel {
  title: string;
  question: string;
  message: string = '';
  constructor() {
    super();
  }
  files: any[];

  onFileChange(event){
    this.files = event.target.files;
  }
  apply() {
    this.result = {
      message: this.message,
    upload : this.files
  }
    this.close();
  }
}

