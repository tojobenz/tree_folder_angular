import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface UploadFileModel {
  title: string;
  question: string;
}

export interface UploadFileResult {
  message: string;
  upload: FileList;
}

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: []
})
export class UploadFileComponent extends SimpleModalComponent<UploadFileModel, UploadFileResult> implements UploadFileModel {
  title: string;
  question: string;
  message: string = '';
  files: FileList | null = null;

  constructor() {
    super();
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.files = input.files;
    }
  }

  apply(): void {
    if (this.files && this.files.length > 0) {
      this.result = {
        message: this.message,
        upload: this.files
      };
      this.close();
    }
  }

  isValid(): boolean {
    return this.files !== null && this.files.length > 0;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
}
