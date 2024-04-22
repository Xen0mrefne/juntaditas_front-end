import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { UserAuth, UserLogin } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loggedIn$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  loggedIn!:boolean;

  baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) {
    this.loggedIn$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    })
  }

  register(user: UserAuth) {
    return this.httpClient.post<UserAuth>(this.baseUrl + "/auth/register", { user })
  }

  // TODO: Login and logout logic
  logIn(user: UserLogin) {
    return this.httpClient.post<UserLogin>(this.baseUrl + "/auth/login", { user })
  }

  logOut() {
    this.loggedIn$.next(false);
  }
}
