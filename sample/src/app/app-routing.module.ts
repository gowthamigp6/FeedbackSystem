import { NgModule } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'navigation', component: NavigationComponent},
  {path : 'fileUpload', component: FileUploadComponent},
  {path : '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
