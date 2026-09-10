import { Component, OnInit, OnDestroy } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { Item } from '../../models/item';
import { NewFolderComponent } from '../modals/new-folder/new-folder.component';
import { UploadFileComponent, UploadFileResult } from '../modals/upload-file/upload-file.component';
import { FolderService } from '../../services/folder.service';
import { FileService } from '../../services/file.service';
import { UserService } from '../../services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { RenameFolderComponent } from '../modals/rename-folder/rename-folder.component';
import { DeleteComponent } from '../modals/delete/delete.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: []
})
export class TreeviewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  folders: Item[] = [];
  openedFolders = new Set<number>();
  foundItems: Item[] = [];
  currentPath: string = '';
  
  isLoading = false;
  pdfView = false;
  pdfSrc = '';
  pageVariable = 1;
  
  imageView = false;
  imageSrc = '';
  currentFileType: 'pdf' | 'image' | 'other' = 'other';
  currentFile: Item | null = null;
  
  // Cabinet info
  cabinetName = '';

  constructor(
    private tokenStorage: TokenStorageService,
    private modalService: SimpleModalService,
    private folderService: FolderService,
    private fileService: FileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadFolders();
    this.loadCabinetInfo();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
    // clear url blob
    if (this.pdfSrc) {
      URL.revokeObjectURL(this.pdfSrc);
    }
    if (this.imageSrc) {
      URL.revokeObjectURL(this.imageSrc);
    }
  }

  /**
   * loading folder from services
   */
  private loadFolders(): void {
    this.isLoading = true;
    this.folderService.loadFolders().pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (folders) => {
        this.folders = folders;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading folders:', error);
        this.isLoading = false;
      }
    });
  }

  /**
   * data cabinet
   */
  private loadCabinetInfo(): void {
    const user = this.tokenStorage.getUser();
    if (user && user.cabinet_id) {
      this.userService.getCabinetUser(user.cabinet_id).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (cabinet) => {
          if (cabinet && cabinet.length > 0) {
            this.cabinetName = cabinet[0].name;
          }
        },
        error: (error) => {
          console.error('Error loading cabinet info:', error);
        }
      });
    }
  }

  /**
   * open a folder
   */
  toggleFolder(item: Item): void {
    if (this.openedFolders.has(item.id)) {
      this.openedFolders.delete(item.id);
    } else {
      this.openedFolders.add(item.id);
    }

    // if file, check type
    if (!item.isFolder) {
      this.displayFile(item);
    }
  }

  /**
   * vizualize
   */
  private displayFile(item: Item): void {
    this.currentFile = item;
    const fileType = this.getFileType(item.path);
    this.currentFileType = fileType;

    this.pdfView = false;
    this.imageView = false;
    this.pdfSrc = '';
    this.imageSrc = '';

    switch (fileType) {
      case 'pdf':
        this.displayPdf(item);
        break;
      case 'image':
        this.displayImage(item);
        break;
      case 'other':
        //  not show if unknow type
        console.log('File type not supported for preview:', item.path);
        break;
    }
  }

  /**
   * determine type file
   */
  public getFileType(filePath: string): 'pdf' | 'image' | 'other' {
    const fileParts = filePath.split('.');
    const extension = fileParts.length > 1 ? fileParts[fileParts.length - 1].toLowerCase() : '';
    
    const pdfExtensions = ['pdf'];
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
    
    if (pdfExtensions.includes(extension)) {
      return 'pdf';
    } else if (imageExtensions.includes(extension)) {
      return 'image';
    } else {
      return 'other';
    }
  }

  /**
   * display pdf
   */
  private displayPdf(item: Item): void {
    console.log('Displaying PDF for item:', item);
    this.pdfView = true;
    this.fileService.showPdf(item).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (blob) => {
        console.log('PDF blob received, creating object URL');
        this.pdfSrc = URL.createObjectURL(blob);
        console.log('PDF object URL created:', this.pdfSrc);
      },
      error: (error) => {
        console.error('Error displaying PDF:', error);
        this.pdfView = false;
      }
    });
  }

  /**
   * display image
   */
  private displayImage(item: Item): void {
    console.log('Displaying image for item:', item);
    this.imageView = true;
    
    // download image
    this.fileService.getFileBlob(item).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (blob) => {
        console.log('Image blob received, creating object URL');
        this.imageSrc = URL.createObjectURL(blob);
        console.log('Image object URL created:', this.imageSrc);
      },
      error: (error) => {
        console.error('Error displaying image:', error);
        this.imageView = false;
      }
    });
  }

  /**
   * close vizualiser
   */
  closeViewer(): void {
    this.pdfView = false;
    this.imageView = false;
    this.pdfSrc = '';
    this.imageSrc = '';
    this.currentFileType = 'other';
    
    if (this.pdfSrc) {
      URL.revokeObjectURL(this.pdfSrc);
    }
    if (this.imageSrc) {
      URL.revokeObjectURL(this.imageSrc);
    }
  }

  /**
   */
  getItemsByParent(parentId: number | null): Item[] {
    return this.folderService.getItemsByParent(parentId);
  }

  hasChildren(itemId: number): boolean {
    return this.folderService.hasChildren(itemId);
  }

  collapseAll(): void {
    this.openedFolders.clear();
  }


  expandAll(): void {
    const allIds = this.folders.map(item => item.id);
    this.openedFolders = new Set(allIds);
  }


  showItemPath(itemId: number): void {
    const item = this.folderService.findItem(itemId);
    if (!item) return;

    let currentItem = item;
    while (currentItem.parent) {
      this.openedFolders.add(currentItem.parent);
      currentItem = this.folderService.findItem(currentItem.parent);
      if (!currentItem) break;
    }
  }

  
  resetSearch(): void {
    this.foundItems = [];
  }

  searchItems(term: string): void {
    if (!term.trim()) {
      this.resetSearch();
      return;
    }

    this.foundItems = this.folderService.searchItems(term);
    this.foundItems.forEach(item => this.showItemPath(item.id));
  }

  deleteItem(item: Item): void {
    this.modalService.addModal(DeleteComponent, {
      title: 'Suppression',
      message: 'Confirmation de la suppression'
    }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.performDelete(item);
      }
    });
  }

  private performDelete(item: Item): void {
    const folderData = {
      path: item.path,
      isFolder: item.isFolder
    };

    this.userService.deleteFolder(item.id).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => {
        this.userService.removeFolder(folderData).pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: () => {
            this.folders = this.folders.filter(f => f.id !== item.id);
            this.folderService.updateCache(this.folders);
          },
          error: (error) => {
            console.error('Error removing folder:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error deleting folder:', error);
      }
    });
  }


  showCreateFolderModal(parentId: number): void {
    this.modalService.addModal(NewFolderComponent, {
      title: 'Nouveau dossier',
      question: 'Nom du dossier'
    }).subscribe((folderName) => {
      if (folderName && folderName.trim()) {
        this.createNewFolder(parentId, folderName);
      }
    });
  }

  private createNewFolder(parentId: number, folderName: string): void {
    this.isLoading = true;
    const user = this.tokenStorage.getUser();
    
    if (!user) {
      console.error('User not authenticated');
      this.isLoading = false;
      return;
    }

    this.folderService.createFolder(parentId, folderName, user.cabinet_id).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (newFolder) => {
        this.isLoading = false;
        // Recharger les dossiers pour avoir les données à jour
        this.loadFolders();
      },
      error: (error) => {
        console.error('Error creating folder:', error);
        this.isLoading = false;
      }
    });
  }

  showUploadFileModal(parentId: number): void {
    this.modalService.addModal(UploadFileComponent, {
      title: 'Ajout d\'un fichier',
      question: 'Le fichier'
    }).subscribe((result: UploadFileResult) => {
      if (result && result.upload && result.upload.length > 0) {
        this.uploadFile(parentId, result.upload[0], result.message);
      }
    });
  }

  private uploadFile(parentId: number, file: File, message: string): void {
    this.isLoading = true;
    const user = this.tokenStorage.getUser();
    
    if (!user) {
      console.error('User not authenticated');
      this.isLoading = false;
      return;
    }

    const parentItem = this.folderService.findItem(parentId);
    if (!parentItem) {
      console.error('Parent folder not found');
      this.isLoading = false;
      return;
    }

    const validation = this.fileService.validateFile(file, 10, ['pdf', 'doc', 'docx', 'txt', 'jpg', 'png']);
    if (!validation.valid) {
      console.error('File validation failed:', validation.error);
      this.isLoading = false;
      return;
    }

    this.fileService.uploadFile(file, parentItem.path, message).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => {
        this.fileService.createFileRecord(file, parentId, parentItem.path, user.cabinet_id, this.folders).pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: (newFile) => {
            this.folders.push(newFile);
            this.folderService.updateCache(this.folders);
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error creating file record:', error);
            this.isLoading = false;
          }
        });
      },
      error: (error) => {
        console.error('Error uploading file:', error);
        this.isLoading = false;
      }
    });
  }


  renameItem(item: Item): void {
    const currentName = item.title;
    const fileName = item.path.split('/').pop() || currentName;

    this.modalService.addModal(RenameFolderComponent, {
      title: 'Modifier le nom',
      question: 'Le nouveau nom',
      message: fileName
    }).subscribe((newName) => {
      if (newName && newName.trim() && newName !== currentName) {
        this.performRename(item, newName);
      }
    });
  }

  private performRename(item: Item, newName: string): void {
    const user = this.tokenStorage.getUser();
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const parentItem = this.folderService.findItem(item.parent || 0);
    if (!parentItem && item.parent) {
      console.error('Parent folder not found');
      return;
    }

    const sanitisedNewName = newName.split(' ').join('_');
    const oldPath = item.path;
    const parentPath = parentItem ? parentItem.path : '';
    const newPath = parentPath ? `${parentPath}/${sanitisedNewName}` : sanitisedNewName;

    const updateData = {
      title: newName,
      path: newPath,
      oldpath: oldPath
    };

    this.userService.updateFolder(item.id, updateData).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => {
        // Mettre à jour l'item local
        const itemIndex = this.folders.findIndex(f => f.id === item.id);
        if (itemIndex !== -1) {
          this.folders[itemIndex].title = newName;
          this.folders[itemIndex].path = newPath;
        }
        this.folderService.updateCache(this.folders);
      },
      error: (error) => {
        console.error('Error renaming item:', error);
      }
    });
  }

  downloadFile(item: Item): void {
    const fileToDownload = item || this.currentFile;
    if (fileToDownload) {
      this.fileService.downloadFile(fileToDownload);
    }
  }


  nextPage(): void {
    this.pageVariable++;
  }

  prevPage(): void {
    if (this.pageVariable > 1) {
      this.pageVariable--;
    }
  }
}
