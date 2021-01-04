import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService { //Linked to the UserController in Java

  constructor(private http:HttpClient) { }


  //User Methods
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


  //Login & logout
  logIn(user:User):Observable<User>{
    return this.http.get<User>("http://localhost:8080/PokeBook/users/login") as Observable<User>;
  }

  logout():Observable<Boolean>{
    return this.http.get<Boolean>("http://localhost:8080/PokeBook/users/logout") as Observable<Boolean>;
  }


  //Live feed
  getMessagesById(id:number):Observable<Message[]>{
    return this.http.get<Message[]>("http://localhost:8080/PokeBook/users/messages") as Observable<Message[]>;
  }


}
