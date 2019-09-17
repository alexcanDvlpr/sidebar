import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  endPoint: string;

  constructor(private http: HttpClient) {
    this.endPoint = 'https://jsonplaceholder.typicode.com/users';
  }


  getAllUsers() {
    return this.http.get(this.endPoint);
  }
}
