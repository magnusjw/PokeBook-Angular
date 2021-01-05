import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Follow } from '../models/follow';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http:HttpClient) { }

  getFollow(f:Follow){
    return this.http.patch<Follow>("http://localhost:8080/PokeBook/follows", f) as Observable<Follow>;
  }

  createFollow(f:Follow){
    return this.http.post("http://localhost:8080/PokeBook/follows", f);
  }

  deleteFollow(f:Follow){
    return this.http.delete<Follow>("http://localhost:8080/PokeBook/follows/" + f);


  }
}
