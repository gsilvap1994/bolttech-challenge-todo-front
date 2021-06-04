import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module'
import { AuthComponent } from './auth/auth.component';
import { HandleLoginComponent } from './handle-login.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [AuthComponent, HandleLoginComponent, CreateUserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
