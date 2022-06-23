import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Avenger} from "../../models/avenger";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor( private http : HttpClient) { }

  getAllFavorites(): Observable<Avenger[]>{
    return this.http.get<Avenger[]>(  'http://localhost:3000/Avengers');
  }

  postFavorites(avenger:Avenger): Observable<Avenger>{
    return this.http.post<Avenger>('http://localhost:3000/Avengers',avenger);
  }

  deleteFavorites(id:number): Observable<Avenger>{
    return this.http.delete<Avenger>('  http://localhost:3000/Avengers/'+ id);
  }

  getFavoritesById(id: number): Observable<Avenger>{
    return this.http.get<Avenger>('  http://localhost:3000/Avengers/'+ id);
  }
}
