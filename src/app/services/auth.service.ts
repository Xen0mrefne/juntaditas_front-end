import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRegister, UserLogin } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  token$:BehaviorSubject<string> = new BehaviorSubject("");
  token!:string;

  baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) {
    this.token$.subscribe((token) => {
      this.token = token;
    })
  }

  register(user: UserRegister) {
    return this.httpClient.post<UserRegister>(this.baseUrl + "/auth/register", { user })
  }

  // TODO: Login and logout logic
  logIn(user: UserLogin) {
    return this.httpClient.post<UserLogin>(this.baseUrl + "/auth/login", { user })
  }

  logOut() {
    this.token$.next("");
  }
}
