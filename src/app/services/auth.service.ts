import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRegister, UserLogin, UserAuth } from '../types/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  token: string;
  userId: string;

  baseUrl = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem("token") || "";
    this.userId = localStorage.getItem("userId") || "";
  }

  register(user: UserRegister) {
    return this.httpClient.post<UserRegister>(this.baseUrl + "/register", { user })
  }

  // TODO: Login and logout logic
  logIn(user: UserLogin) {
    return this.httpClient.post<UserAuth>(this.baseUrl + "/login", { user })
  }

  logOut() {
    this.token = "";
    this.userId = "";
    localStorage.removeItem("token");
    localStorage.removeItem("id")
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  setUserId(userId: string) {
    this.userId = userId;
    localStorage.setItem("userId", userId)
  }
}
