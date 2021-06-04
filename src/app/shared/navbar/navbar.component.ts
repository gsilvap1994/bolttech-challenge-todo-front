import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public user: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInfo()
  }

}
