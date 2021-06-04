import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';



@NgModule({
  declarations: [LoginFormComponent, CreateUserFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [LoginFormComponent, CreateUserFormComponent]
})
export class SharedModule { }
