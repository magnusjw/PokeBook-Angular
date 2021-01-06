import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../models/like.model';


@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http:HttpClient) { }

  createLike(l:Like):Observable<Like>{
    return this.http.post<Like>("http://localhost:8080/PokeBook/likes", l) as Observable<Like>;
  }

  deleteLike(l:Like){
    return this.http.delete<Like>("http://localhost:8080/PokeBook/likes/" + l.id);
  }
}

