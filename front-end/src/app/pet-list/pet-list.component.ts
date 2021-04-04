import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import * as _ from 'lodash';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
export class Pet {
  constructor(
    public id: number,
    public type: string,
    public name: string,
    public age: number,
    public vaccinated: boolean,
    public breed: string,
    public adopted: boolean
  ) {

  }
}

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})


export class PetListComponent implements OnInit {


  pets: Pet[];
  currentPet: Pet;

  user = new User();
  readonly APIUrl = "http://localhost:9191/pets";
  constructor(private httpClient: HttpClient, private _service: RegistrationService) { }

  getPets() {
    return this.httpClient.get<any>(this.APIUrl).subscribe(
      response => {
        console.log(response);
        this.pets = response;
      }
    )
  }

  getByType(type: any) {

    if (type === 'both') {
      return this.getPets();
    }

    return this.httpClient.get<any>(this.APIUrl + "?type=" + type + '').subscribe(
      response => {
        this.pets = response;
      }
    )
  }

  deletePet(val: any) {

    return this.httpClient.delete(this.APIUrl + "/" + val).subscribe(
      response => {
        this.getPets();
      }
    );

  }


  selectPet(pet) {
    this.currentPet = _.cloneDeep(pet);
  }

  updatePet(pet) {

    console.log("ddsdaf", pet);
    return this.httpClient.put(this.APIUrl, pet).subscribe(
      response => {
        console.log(response);
        this.currentPet = null;
        this.getPets();
      }
    )
  }

  ngOnInit(): void {
    this.getPets();
    this.user = this._service.returnUser();
  }


}

