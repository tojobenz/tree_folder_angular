import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FeatureFlagsDirective } from './helpers/feature-flags.directive';
import { UserService } from './services/user.service';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { DataService } from './services/data.service';
import { NewFolderComponent } from './components/modals/new-folder/new-folder.component';
import { UploadFileComponent } from './components/modals/upload-file/upload-file.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RenameFolderComponent } from './components/modals/rename-folder/rename-folder.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { EditUserComponent } from './components/list-user/edit-user/edit-user.component';
import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { AddCabinetComponent } from './components/cabinet/add-cabinet/add-cabinet.component';
import { EditCabinetComponent } from './components/cabinet/edit-cabinet/edit-cabinet.component';
import { HistoricComponent } from './components/auth/historic/historic.component'; // <- import OrderModule
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteComponent } from './components/modals/delete/delete.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { TodoComponent } from './components/todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
    TreeviewComponent,
    FeatureFlagsDirective,
    NewFolderComponent,
    UploadFileComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CabinetComponent,
    NavBarComponent,
    RenameFolderComponent,
    ChangePasswordComponent,
    ListUserComponent,
    EditUserComponent,
    ForgotComponent,
    AddCabinetComponent,
    EditCabinetComponent,
    HistoricComponent,
    DeleteComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PdfViewerModule,
    SimpleModalModule.forRoot({container: "modal-container"}),
    StoreModule.forRoot({ 
      count: counterReducer
    }),
    HttpClientModule,
    NgxDocViewerModule,
    NgxPaginationModule,
  ],
  entryComponents: [
    NewFolderComponent,
    UploadFileComponent,
    RenameFolderComponent,
    DeleteComponent
  ],
  providers: [UserService, DataService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }