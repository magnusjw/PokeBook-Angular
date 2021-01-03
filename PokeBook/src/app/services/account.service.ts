import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  logIn(user:string, pass:string):Observable<User>{ // Retrieve user from database
    return this.http.get<User>("http://3.19.211.125:8080/PokeBook/users") as Observable<User>
  }

  addUser(user:User){
    return this.http.
  }
}
