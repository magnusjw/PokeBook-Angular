import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) { }

  getPokemonFromApi(id:number):Observable<Pokemon>{
    return this.http.get("http://pokeapi.co/api/v2/pokemon/" + id + "/") as Observable<Pokemon>;
  }
}
