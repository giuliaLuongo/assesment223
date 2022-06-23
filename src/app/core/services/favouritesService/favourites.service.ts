import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pop} from "../../models/pop";

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http : HttpClient) { }

  postPopToFavourites(pop : Pop) : Observable<Pop> {
    return this.http.post<Pop>("http://localhost:3000/favourites", pop)
  }

  getAllFavourites() : Observable<Pop[]> {
    return this.http.get<Pop[]>("http://localhost:3000/favourites")
  }

  deletePopFromFavourites(id : number) : Observable<Pop> {
    return this.http.delete<Pop>("http://localhost:3000/favourites/" + id)
  }
}
