import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  readonly APIUrl = "http://localhost:9191/";

  user = new User();

  constructor(private httpClient: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {

    return this.httpClient.post(this.APIUrl + 'login', user);

  }

  public signUpUser(user: User): Observable<any> {
    return this.httpClient.post(this.APIUrl + 'register', user);
  }

  public returnUser() {
    if (this.user != null)
      return this.user;
    else return null;
  }

}
