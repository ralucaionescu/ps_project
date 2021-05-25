import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap/all';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { Center } from '../models/adoptionCenters';
import { FacadeService } from '../services/facade.service';
import { Pet } from '../models/pet';
import { PetService } from '../services/pet.service';
import { RegistrationService } from '../services/registration.service';



@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})


export class PetListComponent implements OnInit {

  pets: Pet[];
  currentPet: Pet;
  asyncPets$: Observable<Pet[]>;
  loggedIn = new BehaviorSubject<boolean>(this.facadeService.isLoggedIn);
  user = JSON.parse(localStorage.getItem('user'));
  adoptedPets = this.user.pets;
  readonly APIUrl = "http://localhost:9191/pets";

  constructor(private httpClient: HttpClient, private facadeService: FacadeService) {

  }

  getPets() {

    return this.facadeService.getPets().subscribe(
      (response: Pet[]) => {
        this.pets = response;
      }
    )
  }

  getByType(type: any) {

    if (type === 'both') {
      return this.getPets();
    }

    return this.facadeService.getByType(type).subscribe(
      response => {
        this.pets = response;
      }
    )
  }

  deletePet(val: any) {

    return this.facadeService.deletePet(val).subscribe(
      response => {
        this.getPets();
      }
    );

  }

  selectPet(pet: Pet) {
    this.currentPet = _.cloneDeep(pet);
  }

  updatePet(pet: Pet) {
    return this.facadeService.updatePet(pet).subscribe(
      response => {
        console.log(response);
        this.currentPet = null;
        this.getPets();
      }
    )
  }

  adoptPet(pet: Pet) {

    if (confirm("Are you sure you wan to adopt " + pet.name + "?")) {
      console.log("Am ajuns aici" + pet);
      this.facadeService.adoptPet(pet, this.user.id).subscribe(
        response => {
          console.log(response);
          this.currentPet = null;
          this.getPets();
        }
      );
    }
  }

  animation() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
  }

  ngOnInit(): void {
    this.getPets();
    this.asyncPets$ = this.facadeService.getPets();
    this.animation();
  }

}

