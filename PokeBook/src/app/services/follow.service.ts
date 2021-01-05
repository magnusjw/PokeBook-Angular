import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follow } from '../models/follow';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http:HttpClient) { }

  createFollow(f:Follow){
    return this.http.post("http://localhost:8080/PokeBook/follows", f);
  }

  deleteFollow(){
    return this.http.delete("http://localhost:8080/PokeBook/follows");
  }
}
