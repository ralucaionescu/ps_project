import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';


@Injectable()
export class LoginService {
  readonly APIUrl = "http://localhost:9191/";
  loggedIn = new BehaviorSubject<boolean>(false);
  currentUser: User;
  headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  loginUserFromRemote(user: User) {
    return this.httpClient.post(this.APIUrl + 'login', user,);

  }
  isSetUserSession(): boolean {

    return !!localStorage.getItem('user');
  }
  setUserSession(user: User) {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

}
