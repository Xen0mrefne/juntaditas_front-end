import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRegister, UserLogin, UserAuth } from '../types/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  auth$:BehaviorSubject<UserAuth> = new BehaviorSubject({token: "", id: ""});
  auth!:UserAuth;

  baseUrl = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient) {
    this.auth$.subscribe((auth) => {
      this.auth = auth;
    })
  }

  register(user: UserRegister) {
    return this.httpClient.post<UserRegister>(this.baseUrl + "/register", { user })
  }

  // TODO: Login and logout logic
  logIn(user: UserLogin) {
    return this.httpClient.post<UserAuth>(this.baseUrl + "/login", { user })
  }

  logOut() {
    this.auth$.next({token: "", id: ""});
  }
}
