import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Juntadita from '../types/juntadita';

@Injectable({
  providedIn: 'root'
})
export class JuntaditaService {

  baseUrl = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) { }

  getJuntaditas() {
    return this.httpClient.get<Juntadita[]>(this.baseUrl + "/juntaditas");
  }

  getJuntadita(id: string) {
    return this.httpClient.get<Juntadita>(this.baseUrl + "/juntaditas/" + id)
  }

  createJuntadita(juntadita: Juntadita) {
    return this.httpClient.post<Juntadita>(this.baseUrl + "/juntaditas", { juntadita })
  }
}
