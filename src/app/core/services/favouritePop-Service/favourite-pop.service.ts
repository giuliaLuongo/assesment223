import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pop} from "../../models/pop";

@Injectable({
  providedIn: 'root'
})
export class FavouritePopService {

  constructor(private http : HttpClient) { }

  getAllFavouritePops() : Observable<Pop[]>{
    return this.http.get<Pop[]>('http://localhost:3000/PopFavourites')
  }

  postNewPop(newPop : Pop) : Observable<Pop>{
    return this.http.post<Pop>('http://localhost:3000/PopFavourites', newPop);
  }

  deleteFavouritePop(id : number) : Observable<Pop>{
    return this.http.delete<Pop>('http://localhost:3000/PopFavourites/'+id);
  }
}
