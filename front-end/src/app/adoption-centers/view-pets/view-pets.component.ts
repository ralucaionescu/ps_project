import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Center } from 'src/app/models/adoptionCenters';
import { FacadeService } from 'src/app/services/facade.service';
import { Pet } from 'src/app/models/pet';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-view-pets',
  templateUrl: './view-pets.component.html',
  styleUrls: ['./view-pets.component.css']
})
export class ViewPetsComponent implements OnInit {

  constructor(public authService: FacadeService, private activatedRoute: ActivatedRoute, private route: Router, private httpClient: HttpClient) { }
  currentCenterPets: Pet[];
  id;
  currentPet: Pet;
  loggedIn = new BehaviorSubject<boolean>(this.authService.isLoggedIn);
  user = JSON.parse(localStorage.getItem('user'));
  readonly api = "http://localhost:9191/adoption-centers";

  adoptPet(pet: Pet) {

    if (confirm("Are you sure you wan to adopt " + pet.name + "?")) {
      console.log("Am ajuns aici" + pet);
      this.authService.adoptPet(pet, this.user.id).subscribe(
        response => {
          console.log(response);
          this.currentPet = null;
          this.getPets();
        }
      );
    }
  }

  getPets() {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.httpClient.get(this.api + "?id=" + this.id).subscribe(
      (center: Center) => {
        console.log("it works");
        this.currentCenterPets = center[0].pets;
        console.log(center[0].pets);
      }
    )
  }



  ngOnInit(): void {
    this.getPets();
  }
}