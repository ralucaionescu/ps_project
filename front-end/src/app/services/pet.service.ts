import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pet } from '../models/pet';


@Injectable()
export class PetService {
  readonly APIUrl = "http://localhost:9191/pets";
  readonly api = "http://localhost:9191/user-profile";
  constructor(private httpClient: HttpClient) { }


  get(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.APIUrl);
  }

  getByType(type: string) {
    return this.httpClient.get<any>(this.APIUrl + "?type=" + type + '').pipe(
      (tap(
        error => this.handleError(error)
      )
      )
    );
  }

  delete(val: Pet) {
    return this.httpClient.delete(this.APIUrl + "/" + val);
  }

  adoptPet(pet: Pet, userID: number) {
    console.log(pet);
    return this.httpClient.put(this.APIUrl + "?id=" + userID, pet);
  }

  updatePet(pet: Pet) {
    console.log(pet);
    return this.httpClient.put(this.APIUrl, pet);
  }

  userPets(userId: number) {
    return this.httpClient.get<any>(this.api + "/" + userId);
  }

  postPet(pet: Pet) {
    console.log(pet);
    pet.inShelter = false;
    pet.adopted = false;
    return this.httpClient.post<Pet>(this.APIUrl, pet);
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
