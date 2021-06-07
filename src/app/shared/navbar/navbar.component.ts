import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public user: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInfo()
  }

  public logOut(): void {

    this.authService.logOut();
    this.router.navigateByUrl('/');
  }

}
