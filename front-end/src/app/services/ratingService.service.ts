import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Center } from '../models/adoptionCenters';
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {
  user = JSON.parse(localStorage.getItem('user'));
  ratings: Rating[] = []
  readonly ratingApi = "http://localhost:9191/ratings";
  constructor(private httpClient: HttpClient) { }
  rate(center: Center, rate: number) {
    console.log(rate);
    let rating = new Rating(rate, this.user, center)
    this.ratings.push(rating);
    console.log(rating);
    this.httpClient.post(this.ratingApi, rating).subscribe(
      data => console.log(data),
      err => console.log(err));
  }
}
