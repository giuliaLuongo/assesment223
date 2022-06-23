import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Pop} from "../../models/Pop";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private http: HttpClient) {
  }
  getAllFavourites():Observable<Pop[]>{
    return this.http.get<Pop[]>("http://localhost:3000/favourites");
  }
  getFavouriteById(id:number):Observable<Pop>{
    return this.http.get<Pop>("http://localhost:3000/favourites/"+ id);
  }
  addFavourite(favourite:Pop):Observable<Pop>{
    return this.http.post<Pop>("http://localhost:3000/favourites", favourite);
  }
  deleteFavourite(id:number):Observable<Pop>{
    return this.http.delete<Pop>("http://localhost:3000/favourites/"+ id)
  }
}
