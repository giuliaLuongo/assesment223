import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pop } from '../../models/pop';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor(private http:HttpClient) { }
  getAllPops(): Observable<Pop[]> {
    return this.http.get<Pop[]>("http://localhost:3000/pop");
  }
  getPopById(id: number): Observable<Pop> {
    return this.http.get<Pop>("http://localhost:3000/pop" + "/" + id);
  }
  getAllFavouritePops(): Observable<Pop[]> {
    return this.http.get<Pop[]>("http://localhost:3000/favouritesPop");
  }

  deletePopOnPopList(id: number): Observable<Pop> {
    return this.http.delete<Pop>("http://localhost:3000/pop" + "/" + id);
  }
  postPopOnFavouritesList(favouritePop: Pop): Observable<Pop> {
    return this.http.post<Pop>("http://localhost:3000/favouritesPop", favouritePop);
  }
  deletePopOnFavouriteList(id: number): Observable<Pop> {
    return this.http.delete<Pop>("http://localhost:3000/favouritesPop" + "/" + id);
  }

  
}
