import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HandleLoginComponent } from './handle-login.component';


const routes: Routes = [
  {
    path: '', component: HandleLoginComponent, children: [
      { path: '', component: AuthComponent },
      { path: 'register', component: CreateUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
