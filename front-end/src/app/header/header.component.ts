import { Component, OnInit } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  navbarOpen = false;

  loggedIn = new BehaviorSubject<boolean>(this.authService.isLoggedIn);
  user = JSON.parse(localStorage.getItem('user'));

  constructor(public authService: RegistrationService, public router: Router) {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  nav() {
    this.router.navigate([`/user-profile/${this.user.id}`]);
  }

  logOut() {
    this.authService.doLogout();
    this.router.navigate(["/"]);
  }
}
