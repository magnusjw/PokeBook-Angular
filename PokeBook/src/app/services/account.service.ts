import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService { //Linked to the UserController in Java

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>("http://localhost:8080/PokeBook/users");
  }

  getUser(id:number){
    return this.http.get<User>("http://localhost:8080/PokeBook/users/" + id); //Path Param
  }

  createUser(user:User){
    return this.http.post("http://localhost:8080/PokeBook/users", user);
  }

  updateUser(user:User){  
    return this.http.put("http://localhost:8080/PokeBook/users", user);
  }


  //Login & logout Functionality not tested
  logIn(user:User):Observable<User>{
    return this.http.get<User>("http://localhost:8080/PokeBook/login") as Observable<User>;
  }

  logout():Observable<Boolean>{
    return this.http.get<Boolean>("http://localhost:8080/PokeBook/logout") as Observable<Boolean>;
  }
}
