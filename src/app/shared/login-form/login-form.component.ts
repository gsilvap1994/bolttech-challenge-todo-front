import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    })
  }


  login(): void {
    this.loginForm.markAsTouched();
    if (this.loginForm.invalid) {
      this.toastr.error('Please enter valid information in the form fields.');
      return;
    }

    this.submitForm.emit(this.loginForm.value)
  }
}
