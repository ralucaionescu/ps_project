import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';
import gsap from 'gsap/all';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Pet } from '../models/pet';
import { FacadeService } from '../services/facade.service';
import * as SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  currentUser = (JSON.parse(localStorage.getItem('user')));
  id;
  loggedIn = new BehaviorSubject<boolean>(this.service.isLoggedIn);
  user = JSON.parse(localStorage.getItem('user'));
  pets: Pet[];
  toggle = false;
  readonly APIUrl = "http://localhost:9191/user-profile";
  constructor(
    private httpClient: HttpClient,
    public service: FacadeService,
    private actRoute: ActivatedRoute,
    public router: Router,
    private snackBar: MatSnackBar,
    public route: Router
  ) {
  }

  profile() {

    this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.router.navigate([`/user-profile/`, this.id._value]);
  }


  subscribeTONotification() {
    const URL = "http://localhost:9191/socket";
    const websocket = new SockJS(URL);
    const stompClient = Stomp.over(websocket);
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/socket/user', notification => {
        let message = notification.body;
        this.snackBar.open(message, 'Close', {
          duration: 4000
        })
      })
    })
  }


  seeRatings() {
    this.route.navigate(['/ratings']);
  }

  viewPets() {
    this.toggle = !this.toggle;
    if (this.toggle == true) {

      this.service.userPets(this.user.id).subscribe(
        response => {
          console.log(response);
          this.pets = response;

        }
      );
    }
    else {
      this.pets = null;
    }
  }

  animation() {

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo('.hero', 1, { height: "0%" }, { height: "80%" })
      .fromTo('.hero', 1.2, { width: '100%' }, { width: "80%" })
      .fromTo('.sliderr', 1.2, { x: "-100%" }, { x: "0%" }, "-=1.2");


  }

  customOptions: any = {
    loop: false,
    margin: 120,
    autoplay: true,
    responsiveClass: true,
    dots: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  ngOnInit() {
    this.animation();

    const headerDict = {
      "x-rapidapi-key": "5446286ce2msh1af970cef8688ebp13e454jsn538d044a25b6",
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };


    //this.subscribeTONotification();
    this.httpClient.get("https://imdb8.p.rapidapi.com/title/get-genres?tconst=tt0944947", requestOptions).subscribe(
      (data) => console.log(data)
    )
  }
}