import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss']
})
export class CreateProjectFormComponent implements OnInit {

  public createProjectForm: FormGroup;
  @Output() public submitForm: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createProjectForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  createProject(): void {
    this.createProjectForm.markAsTouched();
    if (this.createProjectForm.invalid) {
      this.toastr.error('Please enter the project name');
      return
    }

    this.submitForm.emit(this.createProjectForm.value);
  }

}
