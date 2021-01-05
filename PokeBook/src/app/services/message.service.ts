import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  createMessage(message:Message){
    return this.http.post("http://localhost:8080/PokeBook/messages", message);
  }

  
}
