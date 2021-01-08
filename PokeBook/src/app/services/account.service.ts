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
    return this.http.get<User[]>("http://3.129.68.42:8080/PokeBook/users");
  }

  getUser(id:number){
    return this.http.get<User>("http://3.129.68.42:8080/PokeBook/users/" + id, { withCredentials : true }); //Path Param
  }

  createUser(user:User){
    return this.http.post("http://3.129.68.42:8080/PokeBook/users", user);
  }

  updateUser(user:User){  
    return this.http.put("http://3.129.68.42:8080/PokeBook/users", user, { withCredentials : true });
  }

//http://3.129.68.42:8080/PokeBook/
  //Login & logout
  getLoggedInUser(){
    return this.http.get<User>("http://3.129.68.42:8080/PokeBook/users/0", { withCredentials : true });
  }

  logIn(user:User):Observable<User>{
    return this.http.put("http://3.129.68.42:8080/PokeBook/users/login", user, { withCredentials : true }) as Observable<User>;
  }

  logout():Observable<Boolean>{
    return this.http.get<Boolean>("http://3.129.68.42:8080/PokeBook/users/logout") as Observable<Boolean>;
  }


  //Live feed
  getMessagesById(id:number):Observable<Message[]>{
    return this.http.get<Message[]>("http://3.129.68.42:8080/PokeBook/messages/" + id) as Observable<Message[]>;
  }


}
