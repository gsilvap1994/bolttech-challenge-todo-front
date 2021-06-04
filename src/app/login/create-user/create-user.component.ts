import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageLayerService } from 'src/app/shared/services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private authService: AuthService, private storage: StorageLayerService, private router: Router) { }

  ngOnInit(): void {
  }


  createUser(formValue: any): void {
    this.authService.createUser(formValue).subscribe(() => {

      this.authService.login(formValue.email, formValue.password).subscribe((response: any) => {
        this.storage.save('user', response.user);
        this.storage.save('token', response.token);

        this.router.navigate(['/projects'])
      })
    })
  }

}
