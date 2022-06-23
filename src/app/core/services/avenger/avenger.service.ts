import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Avenger} from "../../models/avenger";

@Injectable({
  providedIn: 'root'
})
export class AvengerService {

  constructor(private http : HttpClient) {}

  getAllAvengers(): Observable<Avenger[]>{
    return this.http.get<Avenger[]>(  'http://localhost:3000/Avengers');
  }

  postAvengers(avenger:Avenger): Observable<Avenger>{
    return this.http.post<Avenger>('http://localhost:3000/Avengers',avenger);
  }

  deleteAvengers(id:number): Observable<Avenger>{
    return this.http.delete<Avenger>('  http://localhost:3000/Avengers/'+ id);
  }

  getAvengersById(id: number): Observable<Avenger>{
    return this.http.get<Avenger>('  http://localhost:3000/Avengers/'+ id);
  }
}
