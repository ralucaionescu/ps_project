import { HttpClient } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Center } from '../models/adoptionCenters';
import { Pet } from '../models/pet';
import * as _ from 'lodash';
import { FacadeService } from '../services/facade.service';
import { Rating } from '../models/rating';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { transpileModule } from 'typescript';
@Component({
  selector: 'app-adoption-centers',
  templateUrl: './adoption-centers.component.html',
  styleUrls: ['./adoption-centers.component.css']
})
export class AdoptionCentersComponent implements OnInit {

  public search: any = '';
  centersList: Center[];
  currentCenter: Center;
  currentCenterPets: Pet[];

  allCenters;
  view: boolean;
  query;
  currentRate = 0;
  rating: Rating;
  loggedIn = new BehaviorSubject<boolean>(this.facadeService.isLoggedIn);
  user = JSON.parse(localStorage.getItem('user'));
  readonly api = "http://localhost:9191/adoption-centers";
  readonly ratingApi = "http://localhost:9191/ratings";

  constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private route: Router, private facadeService: FacadeService) { }

  onRateChange(center: Center, rate: number) {
    console.log(rate);
    this.currentRate = rate;
    let rating = new Rating(rate, this.user, center)
    console.log(rating);
    this.httpClient.post(this.ratingApi, rating).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => this.getCenters()
    );
    this.dialog.open(DialogElementsExampleDialog);
  }

  centerRated(center: Center): boolean {

    let rated = false;
    for (let rate of center.ratings) {
      if (this.user.id == rate.user.id) {
        rated = true;
        break;
      }
    }

    return rated;
  }


  viewPets(center) {
    this.currentCenter = center;
    if (+this.activatedRoute.snapshot.params['id'] != undefined) {
      this.view = false;
    }
    else {
      this.view = true;
    }
  }

  update(center) {
    this.currentCenter = _.cloneDeep(center);
  }

  updateCenter(data) {

    return this.httpClient.put(this.api, data).subscribe(
      response => {
        console.log(response);
        this.currentCenter = null;
        this.getCenters();
        this.route.navigate(['/adoption-centers']);
      }
    )
  }

  getCenters() {

    this.httpClient.get<any>(this.api).subscribe(
      result => {
        console.log(result);
        this.centersList = result;
        this.allCenters = this.centersList;

      }
    )
  }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.params['id'] != undefined) {

      this.view = false;
    }
    else {
      this.view = true;
    }
    console.log(this.view, this.activatedRoute.snapshot.params['id']);
    this.getCenters();
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  template: `<h1 mat-dialog-title>Thank you for your rating</h1>
  <div mat-dialog-content>Visit your profile page to see your ratings</div>


 `
})
export class DialogElementsExampleDialog {

}
