import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { HistoricComponent } from './components/auth/historic/historic.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AddCabinetComponent } from './components/cabinet/add-cabinet/add-cabinet.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { EditCabinetComponent } from './components/cabinet/edit-cabinet/edit-cabinet.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditUserComponent } from './components/list-user/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { AdminGuard } from './helpers/admin-guard';
import { LoginGuard } from './helpers/login-guard';
import { NormalGuard } from './helpers/normal-guard';
import { SimpleAdmin } from './helpers/simple-admin';


const routes: Routes = [
  {
    path: 'explorer',
    canActivate: [NormalGuard],
    //loadChildren: () => import('./file-explorer/file-explorer.module').then(mod => mod.FileExplorerModule)
    component: TreeviewComponent,
  },
  {
    path: 'todo',
    canActivate: [NormalGuard],
    component: TodoComponent,
  },
  { path: 'login', 
  component: LoginComponent,
     canActivate: [LoginGuard],
},
  { path: 'register', 
  component: RegisterComponent ,
  canActivate: [NormalGuard, AdminGuard],
},
{ path: 'forgot', 
component: ForgotComponent ,
},
  { path: 'change-password', 
  component: ChangePasswordComponent ,
  canActivate: [NormalGuard, AdminGuard],
},
{ path: 'list-user', 
  component: ListUserComponent ,
  canActivate: [NormalGuard, AdminGuard],
},
{ path: 'historic', 
  component: HistoricComponent ,
  canActivate: [NormalGuard, SimpleAdmin],
},
{ path: 'edit-user/:id', 
  component: EditUserComponent ,
  canActivate: [NormalGuard, AdminGuard],
},
  { path: 'profile', 
  component: ProfileComponent,
  canActivate: [NormalGuard],
},
  { path: 'cabinet', 
  component: CabinetComponent,
  canActivate: [NormalGuard, AdminGuard],
},
{ path: 'new-cabinet', 
component: AddCabinetComponent,
canActivate: [NormalGuard, AdminGuard],
},
{ path: 'edit-cabinet/:id', 
component: EditCabinetComponent,
canActivate: [NormalGuard, AdminGuard],
},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
