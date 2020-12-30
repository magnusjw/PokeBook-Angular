import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  userLogIn(user:string, pass:string):Observable<User>{
    return this.http.get("http://3.19.211.125:8080/PokeBook/login") as Observable<User>
  }
}
