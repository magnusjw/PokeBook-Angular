import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  createMessage(message:Message){
    return this.http.post("http://3.129.68.42:8080/PokeBook/messages", message);
  }

  getMessagesByPokeId(id:number):Observable<Message[]>{
    return this.http.get<Message[]>("http://3.129.68.42:8080/PokeBook/messages/?pokemon_id=" + id) as Observable<Message[]>; //Have MessageController Getmapping 
  }
  
}
