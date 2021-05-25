import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class RegistrationService {
  readonly APIUrl = "http://localhost:9191/";

  user: User;
  currentUser: User;
  id;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient, public router: Router) {
    this.loggedIn.next(this.isSetUserSession());
  }

  isSetUserSession(): boolean {

    return !!localStorage.getItem('user');
  }

  public logged() {
    return this.loggedIn;
  }

  public signUpUser(user: User) {
    return this.httpClient.post(this.APIUrl + 'register', user)
      .subscribe((res: any) => {
        this.user = res;
        this.setUserSession(res);
        this.loggedIn.next(this.isSetUserSession());
        this.currentUser = res;
        this.id = res.id;

      })
  }
  setUserSession(user: User) {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
  public returnUser() {
    if (this.currentUser != null)
      return this.currentUser;
    else return null;
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('user');
    return (authToken !== null) ? true : false;
  }

  doLogout() {

    this.clearUserSession();
    window.location.reload();

  }

  clearUserSession() {
    localStorage.removeItem('user');
  }


  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.APIUrl}login`;
    return this.httpClient.get(api).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
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
