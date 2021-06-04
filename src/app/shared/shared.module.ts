import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [LoginFormComponent, CreateUserFormComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [LoginFormComponent, CreateUserFormComponent, NavbarComponent]
})
export class SharedModule { }
