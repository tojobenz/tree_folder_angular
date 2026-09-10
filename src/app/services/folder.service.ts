import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Item, FolderItem } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private cachedFolders: Item[] = [];

  constructor(private userService: UserService) {}

  /**
   * Charge les dossiers selon les permissions de l'utilisateur
   */
  loadFolders(): Observable<Item[]> {
    const user = this.userService.getTokenStorage().getUser();
    
    if (!user) {
      return of([]);
    }

    if (user.roles === '1' || user.roles === '3') {
      // Admin ou super user - voit tous les dossiers
      return this.userService.getFolder().pipe(
        map(folders => {
          this.cachedFolders = folders;
          return folders;
        }),
        catchError(() => of([]))
      );
    } else {
      // User normal - voit seulement les dossiers de son cabinet
      return this.userService.getFolderCabinet(user.cabinet_id).pipe(
        map(folders => {
          this.cachedFolders = folders;
          return folders;
        }),
        catchError(() => of([]))
      );
    }
  }

  /**
   * Récupère les dossiers depuis le cache
   */
  getCachedFolders(): Item[] {
    return this.cachedFolders;
  }

  /**
   * Récupère les items d'un parent spécifique
   */
  getItemsByParent(parentId: number | null): Item[] {
    return this.cachedFolders.filter(item => {
      if (parentId === null || parentId === 0) {
        return !item.parent || item.parent === 0;
      }
      return item.parent === parentId;
    });
  }

  /**
   * Vérifie si un item a des enfants
   */
  hasChildren(itemId: number): boolean {
    return this.cachedFolders.some(item => item.parent === itemId);
  }

  /**
   * Trouve un item par son ID
   */
  findItem(itemId: number): Item | undefined {
    return this.cachedFolders.find(item => item.id === itemId);
  }

  /**
   * Crée un nouveau dossier
   */
  createFolder(parentId: number, folderName: string, cabinetId: number): Observable<Item> {
    const parentItem = this.findItem(parentId);
    const parentPath = parentItem ? parentItem.path : '';
    const sanitizedName = folderName.split(' ').join('_');
    const newPath = parentPath ? `${parentPath}/${sanitizedName}` : sanitizedName;

    // Générer un ID temporaire (sera remplacé par le backend)
    const maxId = this.cachedFolders.length > 0 
      ? Math.max(...this.cachedFolders.map(item => item.id)) 
      : 0;

    const newFolder: Item = {
      id: maxId + 1,
      title: folderName,
      parent: parentId,
      path: newPath,
      isFolder: true,
      cabinet_id: cabinetId
    };

    return this.userService.postFolder(newFolder).pipe(
      map(() => {
        this.cachedFolders.push(newFolder);
        return newFolder;
      })
    );
  }

  /**
   * Met à jour le cache après modification
   */
  updateCache(updatedFolders: Item[]): void {
    this.cachedFolders = updatedFolders;
  }

  /**
   * Vide le cache
   */
  clearCache(): void {
    this.cachedFolders = [];
  }

  /**
   * Recherche des dossiers/fichiers
   */
  searchItems(searchTerm: string): Item[] {
    const term = searchTerm.toLowerCase();
    return this.cachedFolders.filter(item => 
      item.title.toLowerCase().includes(term)
    );
  }

  /**
   * Construit le chemin complet pour un item
   */
  getItemPath(itemId: number): string[] {
    const path: string[] = [];
    let currentItem = this.findItem(itemId);

    while (currentItem) {
      path.unshift(currentItem.title);
      if (currentItem.parent) {
        currentItem = this.findItem(currentItem.parent);
      } else {
        break;
      }
    }

    return path;
  }
}
