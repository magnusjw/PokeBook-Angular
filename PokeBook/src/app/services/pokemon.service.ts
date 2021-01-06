import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonFromApi(input):Observable<Object>{
    return this.http.get("http://pokeapi.co/api/v2/pokemon/" + input + "/") as Observable<Object>;
  }



  getMessagesByPokeId(id:number):Observable<Message[]>{
    return this.http.get<Message[]>("http://localhost:8080/PokeBook/messages/?pokemon_id=" + id) as Observable<Message[]>; //Have MessageController Getmapping 
  }

}