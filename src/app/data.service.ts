import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(select, input) {
    return this.http.get(`https://swapi.co/api/${select}/?search=${input}`)
  }
}
