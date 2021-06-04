import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageLayerService } from 'src/app/shared/services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private storage: StorageLayerService, private router: Router) { }

  ngOnInit(): void {
  }


  login(formValue: { email: string, password: string }): void {
    const { email, password } = formValue;
    this.authService.login(email, password).subscribe((response: any) => {
      this.storage.save('user', response.user);
      this.storage.save('token', response.token);

      this.router.navigate(['/projects'])
    })
  }
}
