import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pop} from "../../models/pop";

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor(private http:HttpClient) { }

  getAllPop(): Observable<Pop[]>{
    return this.http.get<Pop[]>(  'http://localhost:3000/Pop');
  }

  deletePop(id:number): Observable<Pop>{
    return this.http.delete<Pop>('  http://localhost:3000/Pop/'+ id);
  }

  addFav(pop:Pop): Observable<Pop>{
    return this.http.patch<Pop>('http://localhost:3000/Pop/' + pop.id ,pop);
  }

  getPopById(id: number): Observable<Pop>{
    return this.http.get<Pop>('  http://localhost:3000/Pop/'+ id);
  }
}
