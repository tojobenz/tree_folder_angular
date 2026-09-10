import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private userService: UserService) {}

  /**
   * Upload file
   */
  uploadFile(file: File, parentPath: string, message: string = ''): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('msg', message);
    formData.append('path', '/' + parentPath);

    return this.userService.upload(formData).pipe(
      tap(() => {
        // Upload successful - could trigger a notification here
      }),
      catchError(error => {
        console.error('Upload failed:', error);
        throw error;
      })
    );
  }

  /**
   * Upload multiple files
   */
  uploadMultipleFiles(files: FileList, parentPath: string, message: string = ''): Observable<any[]> {
    const uploadObservables: Observable<any>[] = [];

    for (let i = 0; i < files.length; i++) {
      uploadObservables.push(this.uploadFile(files[i], parentPath, message));
    }
    return of([]);
  }

  /**
   * download file
   */
  downloadFile(item: Item): void {
    const fileName = this.extractFileName(item.path);
    const sanitisedPath = item.path.split('/').join('|');

    this.userService.downloadFile(sanitisedPath).subscribe(
      (data: Blob) => {
        const downloadURL = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadURL;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(downloadURL);
      },
      error => {
        console.error('Download failed:', error);
      }
    );
  }

  /**
   * blob file
   */
  getFileBlob(item: Item): Observable<Blob> {
    const sanitisedPath = item.path.split('/').join('|');
    console.log('Requesting file blob for path:', sanitisedPath);
    
    return this.userService.downloadFile(sanitisedPath).pipe(
      tap(blob => {
        console.log('File blob received, size:', blob.size, 'type:', blob.type);
      }),
      catchError(error => {
        console.error('Error fetching file blob:', error);
        throw error;
      })
    );
  }

  /**
   * display pdf
   */
  showPdf(item: Item): Observable<Blob> {
    const sanitisedPath = item.path.split('/').join('|');
    console.log('Requesting PDF for path:', sanitisedPath);
    
    return this.userService.showPdf(sanitisedPath).pipe(
      tap(blob => {
        console.log('PDF blob received, size:', blob.size, 'type:', blob.type);
      }),
      catchError(error => {
        console.error('Error fetching PDF:', error);
        throw error;
      })
    );
  }

  /**
   * file name
   */
  private extractFileName(path: string): string {
    const lastSlashIndex = path.lastIndexOf('/');
    return lastSlashIndex !== -1 ? path.substring(lastSlashIndex + 1) : path;
  }

  sanitiseFileName(fileName: string): string {
    return fileName.split(' ').join('_');
  }

  validateFile(file: File, maxSizeMB: number = 10, allowedTypes: string[] = []): { valid: boolean; error?: string } {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return { valid: false, error: `File size exceeds ${maxSizeMB}MB limit` };
    }

    // verify type 
    if (allowedTypes.length > 0) {
      const fileParts = file.name.split('.');
      const fileExtension = fileParts.length > 1 ? fileParts[fileParts.length - 1].toLowerCase() : '';
      if (!allowedTypes.includes(fileExtension)) {
        return { valid: false, error: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}` };
      }
    }

    return { valid: true };
  }

  /**
   * save in bdd
   */
  createFileRecord(
    file: File, 
    parentId: number, 
    parentPath: string, 
    cabinetId: number,
    existingFolders: Item[]
  ): Observable<Item> {
    const sanitisedName = this.sanitiseFileName(file.name);
    const newPath = parentPath ? `${parentPath}/${sanitisedName}` : sanitisedName;
    
    // id generate
    const maxId = existingFolders.length > 0 
      ? Math.max(...existingFolders.map(item => item.id)) 
      : 0;

    const newFile: Item = {
      id: maxId + 1,
      title: file.name,
      parent: parentId,
      path: newPath,
      isFolder: false,
      cabinet_id: cabinetId
    };

    return this.userService.postFolder(newFile).pipe(
      map(() => newFile)
    );
  }
}
