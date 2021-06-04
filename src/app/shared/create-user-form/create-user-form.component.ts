import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  public createUserForm: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { }

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


  login(): void {
    if (this.createUserForm.invalid || this.createUserForm.value.password !== this.createUserForm.value.confirm) {
      console.log('Form invalid');
      return;
    }

    this.submitForm.emit(this.createUserForm.value)
  }

}
