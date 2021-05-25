import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Pet } from '../models/pet';
import { PetService } from './pet.service';
import { RegistrationService } from './registration.service';
import { User } from '../models/user';

@Injectable()
export class FacadeService {

  loggedIn = new BehaviorSubject<boolean>(false);
  currentUser: User;
  constructor(private _loginService: LoginService, private _registerService: RegistrationService, private _petService: PetService, private httpClient: HttpClient) {

  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('user');
    return (authToken !== null) ? true : false;
  }

  login(user: User) {
    return this._loginService.loginUserFromRemote(user);
  }

  isSetUserSession() {
    return this._loginService.isSetUserSession();
  }

  setUserSession(user: User) {
    return this._loginService.setUserSession(user);
  }

  doLogout() {
    return this._registerService.doLogout();
  }

  signUpUser(user: User) {
    return this._registerService.signUpUser(user);
  }

  logged() {
    return this._registerService.loggedIn.value;
  }

  getPets(): Observable<Pet[]> {
    return this._petService.get();
  }

  getByType(type: string) {
    return this._petService.getByType(type);
  }

  postPet(pet: Pet) {
    return this._petService.postPet(pet);
  }
  deletePet(pet: Pet) {
    return this._petService.delete(pet);
  }

  adoptPet(pet: Pet, user) {
    return this._petService.adoptPet(pet, user);
  }
  updatePet(pet: Pet) {
    return this._petService.updatePet(pet);
  }

  userPets(userId: number) {
    return this._petService.userPets(userId);
  }
}
