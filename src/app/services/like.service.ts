import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../models/like.model';


@Injectable({
  providedIn: 'root'
})
export class LikeService {
  
  constructor(private http:HttpClient) { }

  getLikes(id:number):Observable<Like[]>{
    return this.http.get<Like[]>("http://3.129.68.42:8080/PokeBook/likes/?user_id=" + id) as Observable<Like[]>;
  }
  createLike(l:Like):Observable<Like>{
    return this.http.post<Like>("http://3.129.68.42:8080/PokeBook/likes", l) as Observable<Like>;
  }

  deleteLike(l:Like){
    return this.http.delete<Like>("http://3.129.68.42:8080/PokeBook/likes/" + l.id);
  }
}

