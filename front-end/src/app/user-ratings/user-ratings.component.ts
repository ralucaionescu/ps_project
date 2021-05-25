import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { FacadeService } from '../services/facade.service';
import { Rating } from '../models/rating';

@Component({
  selector: 'app-user-ratings',
  templateUrl: './user-ratings.component.html',
  styleUrls: ['./user-ratings.component.css']
})
export class UserRatingsComponent implements OnInit {

  ratings: Rating[] = [];
  loggedIn = new BehaviorSubject<boolean>(this.facadeService.isLoggedIn);
  user = JSON.parse(localStorage.getItem('user'));
  readonly ratingApi = "http://localhost:9191/ratings";
  constructor(private httpClient: HttpClient, private facadeService: FacadeService) { }

  ngOnInit() {
    this.httpClient.get<Rating[]>(this.ratingApi).subscribe(
      rating => {
        this.ratings = rating;
      }
    )

    console.log(this.user.ratings);

  }

}
