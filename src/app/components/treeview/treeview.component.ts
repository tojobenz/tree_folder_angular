import {
  Component, Input, OnInit, Output, EventEmitter
} from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import {Item} from '../../model/item';
import {NewFolderComponent} from '../modals/new-folder/new-folder.component'
import { UploadFileComponent } from '../modals/upload-file/upload-file.component';
import { Observable, of } from 'rxjs';
import { DataService } from './../../service/data.service';
import { map , tap, shareReplay} from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { RenameFolderComponent } from '../modals/rename-folder/rename-folder.component';
import { DeleteComponent } from '../modals/delete/delete.component';
@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent{
  private map = new Map<any, Item>();
  @Input() list = [];
  @Input() opened = new Set();
  @Input() matcher = (term, item) => item.title.toLowerCase().includes(term.toLowerCase());
  @Output() addChild = new EventEmitter<any>();
  @Output() removeChild = new EventEmitter<any>();
  currentPath: string;
  found: Item[] = [];
  pdfView = false;
  cabinet = "";
  load=  false;

  list$: Observable<Item[]>
  constructor(private token: TokenStorageService,private SimpleModalService: SimpleModalService,  private data: DataService, private userService: UserService) {

    this.listFolder();
    this.ShowCabinet();
  }

  listFolder() {
    if(this.token.getUser().roles === "1" || this.token.getUser().roles === "3") {
      this.userService.getFolder().subscribe(data => {
        return of<Item[]>(this.list = data);
        
      });
    } else {
      this.userService.getFolderCabinet(this.token.getUser().cabinet_id).subscribe(data=> {
        return of<Item[]>(this.list = data);
      })
    }
  }
  ShowCabinet() {
    this.userService.getCabinetUser(this.token.getUser().cabinet_id).subscribe(data => {
    }) 
  }

  toggle(item) {
    this.opened.has(item.id) ? this.opened.delete(item.id) : !this.opened.add(item.id);
    if(item.isFolder == false) {
      this.pdfView = true;
      let x=item.path
      var f = x.substr(0, x.lastIndexOf('.')) || x;
      var iz = f.split('/').join('|');
  
      this.userService.showPdf(iz).subscribe(data => {
        var fileURL = URL.createObjectURL(data);
        this.pdfSrc = fileURL
      })
    }
  }

  getItemsAtParent(parentId) {
    return this.list.filter(item => {
      return parentId ? item.parent === parentId : !item.parent
    });
  }

  hasChildren(id) {

    const found = this.list.find(item => item.parent === +id);
    return found;
  }
  collapseAll() {
    this.opened.clear();
  }

  expandAll() {
    const ids = this.list.map(item => item.id);
    this.opened = new Set(ids);
  }

  show(id) {
    let item = 'parent' in id ? id : this.find(+id);
    console.log(item)

    if (!item) {
      return;
    }

    while (item.parent) {
      this.opened.add(item.parent);
      item = this.find(item.parent);
    }
  }

  
  private find(id) {
    return this.list.find(item => item.id === id);
  }

  searchReset() {
    this.found = [];
  }
  remove(el) {

    this.SimpleModalService.addModal(DeleteComponent, {
      title: 'Suppression',
      message: 'Confirmation du suppression'})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          var removeIndex = this.list.map(item => item.id)
          .indexOf(el.id);
      ~removeIndex && this.list.splice(removeIndex, 1);
          let feed = {
            path: el.path,
            isFolder: el.isFolder
          }
            this.userService.deleteFolder(el.id).subscribe(data => {
            console.log(data);
          });   
             this.userService.removeFolder(feed).subscribe(data => {
            console.log(data);
          });   
        }
    });
  }


  search(term) {
    this.found = this.list.filter(item => this.matcher.call(this, term, item));
    this.found.forEach(item => this.show(item))
  }

  showCreateFolder(el) {
    let parentPath = this.list.find(item => item.id === el);
    if(parentPath.path.includes('/')) { 
      let a = parentPath.path.substring(0, parentPath.path.indexOf('/'));
      this.userService.getCabinetID(a.split('_').join(' ')).subscribe(d => {
 this.SimpleModalService.addModal(NewFolderComponent, {
      title: 'Nouveau dossier',
      question: 'Nom du dossier'})
      .subscribe((message) => {
        if(message!= undefined) {
          this.load = true;
          let new_text = message.split(' ').join('_');
          let parentPath = this.list.find(item => item.id === el);

          this.userService.getFolder().subscribe(data => {
            let max = Math.max.apply(null, data.map(item => item.id));

            let feed = {
              id: max + 1,
              title: message,
              parent: el,
              path: parentPath.path.split(' ').join('_') +'/' + new_text,
              isFolder: true,
              cabinet_id: d[0].id,
            };
            this.userService.postFolder(feed).subscribe(data => {
              console.log(data);
            });
            this.list.push(feed);
            this.load = false;
          });
        }
      }); 
      })
    } else {
      this.userService.getCabinetID(parentPath.path.split('_').join(' ')).subscribe(d => {
 this.SimpleModalService.addModal(NewFolderComponent, {
      title: 'Nouveau dossier',
      question: 'Nom du dossier'})
      .subscribe((message) => {
        if(message!= undefined) {
          this.load = true;
          let new_text = message.split(' ').join('_');
          let parentPath = this.list.find(item => item.id === el);


          this.userService.getFolder().subscribe(data => {
            let max = Math.max.apply(null, data.map(item => item.id));
            let feed = {
              id: max + 1,
              title: message,
              parent: el,
              path: parentPath.path.split(' ').join('_') +'/' + new_text,
              isFolder: true,
              cabinet_id: d[0].id,
            };
            this.userService.postFolder(feed).subscribe(data => {
              console.log(data);
            });
            this.list.push(feed);
            this.load = false;
        
          });

        }
      }); 
      })
    }
  }
  showUploadFile(el) {

    this.SimpleModalService.addModal(UploadFileComponent, {
      title: 'Ajout d\'un fichier',
      question: 'le fichier'})
      .subscribe((message) => {
        if(message != undefined) {

          let parentPath = this.list.find(item => item.id === el);
          if(parentPath.path.includes('/')) {
            let a = parentPath.path.substring(0, parentPath.path.indexOf('/'));
            this.userService.getCabinetID(a.split('_').join(' ')).subscribe(d => {
              this.load = true;
              let new_text = message.upload[0].name.split(' ').join('_');
              let formData = new FormData();
      
                formData.append('file', message.upload[0]);
                formData.append('msg', message.message);
                formData.append('path', '/' + parentPath.path);
                this.userService.upload(formData).subscribe((up) =>
                console.log(up), (err) => console.log(err));
      
            this.userService.getFolder().subscribe(data => {
              let max = Math.max.apply(null, data.map(item => item.id));
            let feed = {
              id: max + 1,
              title: new_text,
              parent: el,
              path: parentPath.path +'/' + new_text,
              isFolder: false,
              cabinet_id: d[0].id,
            };
            this.userService.postFolder(feed).subscribe(data => {
              console.log(data);
            });
            this.list.push(feed);
            this.load = false
          
            });
             })
           
          } else {
            this.userService.getCabinetID(parentPath.path.split('_').join(' ')).subscribe(d => { 
              this.load = true;
              let new_text = message.upload[0].name.split(' ').join('_');
              let formData = new FormData();
      
                formData.append('file', message.upload[0]);
                formData.append('msg', message.message);
                formData.append('path', '/' + parentPath.path);
                this.userService.upload(formData).subscribe((up) =>
                console.log(up), (err) => console.log(err));
      
            this.userService.getFolder().subscribe(data => {
              let max = Math.max.apply(null, data.map(item => item.id));
            let feed = {
              id: max + 1,
              title: new_text,
              parent: el,
              path: parentPath.path +'/' + new_text,
              isFolder: false,
              cabinet_id: d[0].id,
            };
            this.userService.postFolder(feed).subscribe(data => {
              console.log(data);
            });
            this.list.push(feed);
            this.load = false
          
            });
             })
           
          }  
        }
      });
  }

  renameFile(el) {
    var iz = el.title.split('dossier ').join('|');
    const oldTitle = el.title.split(' ').join('_');
    let parentPath = this.list.find(item => item.id === el.id);
    let fichier = parentPath.path.split("/").pop();
     this.SimpleModalService.addModal(RenameFolderComponent, {
      title: 'Modifier le nom',
      question: 'Le nouveau nom', message: fichier})
      .subscribe((message) => {
        if(message!= undefined) {
        let objIndex = this.list.findIndex((obj => obj.id == el.id));
        //Update object's name property.
        this.list[objIndex].title = message;
        let new_text = message.split(' ').join('_');

        let a = parentPath.path.substring(0, parentPath.path.indexOf('/'));
        this.userService.getCabinetID(a.split('_').join(' ')).subscribe(d => {

          //Get the last value of slash
          var rest = parentPath.path.substring(0, parentPath.path.lastIndexOf("/") + 1);
          this.userService.getFolderCabinet(d[0].id).subscribe(data=> {

           for( let i =0; i< data.length; i++) {
               let a = data[i].path.split(parentPath.path).join(rest.concat(new_text));
               if(data[i].path === parentPath.path) {
                 let feed = {
                   title: message,
                   path: a,
                   oldpath: parentPath.path
                 };
                this.userService.updateFolder(data[i].id,feed).subscribe(data => {
                 console.log(data);
               }); 
               } else if(data[i].path.includes(parentPath.path)) {
                 let feed = {
                   path: a,
                   oldpath: parentPath.path
                 };
                this.userService.updateFolder(data[i].id,feed).subscribe(data => {
                 console.log(data);
               }); 
               }
         
           }
         }) 
        })
     


      }
      });
 
  }

  downloadFile(el) {
    let x=el.path
    var f = x.substr(0, x.lastIndexOf('.')) || x;
    var n = el.path.lastIndexOf('/');
  var result = el.path.substring(n + 1);  
    console.log(result);
     var iz = el.path.split('/').join('|');
    this.userService.downloadFile(iz).subscribe((data) => {

      const blob = new Blob([data]);
    
      var downloadURL = window.URL.createObjectURL(data);
      console.log(data)
       console.log(blob)
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = result;
      link.click(); 
      
    }) 
  }

  pdfSrc = "";
  pageVariable = 1;

  nextPage() {
    this.pageVariable++;
  }
  prevPage() {
    if(this.pageVariable > 1) {
      this.pageVariable--;
    }
 
  }
  onFileSelected() {
    let $img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e)

        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}
