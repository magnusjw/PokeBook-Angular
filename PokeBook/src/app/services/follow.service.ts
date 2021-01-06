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
  
  getFollowsByUserId(id:number):Observable<Follow[]>{
    return this.http.get<Follow[]>("http://localhost:8080/PokeBook/follows/?user_id=" + id) as Observable<Follow[]>; //Have MessageController Getmapping 
  }

  createFollow(f:Follow):Observable<Follow>{
    return this.http.post<Follow>("http://localhost:8080/PokeBook/follows", f) as Observable<Follow>;
  }

  deleteFollow(f:Follow){
    return this.http.delete<Follow>("http://localhost:8080/PokeBook/follows/" + f.id);
  }
}