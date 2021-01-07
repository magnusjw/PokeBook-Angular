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

}