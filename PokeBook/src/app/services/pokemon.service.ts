import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonFromApi(input):Observable<Pokemon>{
    return this.http.get("http://pokeapi.co/api/v2/pokemon/" + input + "/") as Observable<Pokemon>;
  }



  getMessagesByPokeId(id:number):Observable<Message[]>{
    return this.http.get<Message[]>("http://localhost:8080/PokeBook/messages") as Observable<Message[]>; //Have MessageController Getmapping 
  }

}