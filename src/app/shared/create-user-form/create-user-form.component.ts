import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  public createUserForm: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.createUserForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirm': ['', [Validators.required, Validators.minLength(6)]]
    })
  }


  createUser(): void {
    this.createUserForm.markAllAsTouched();
    if (this.createUserForm.invalid) {
      this.createUserForm.value.password !== this.createUserForm.value.confirm ?
        this.toastr.error('Password and confirm does not match') :
        this.toastr.error('Please enter valid information in the form fields.');
      return;
    }

    this.submitForm.emit(this.createUserForm.value)
  }

}
