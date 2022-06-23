import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pop} from "../../../shared/models/Pop";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor(private http : HttpClient) { }

  getAllPops() : Observable<Pop[]>{
    return this.http.get<Pop[]>('http://localhost:3000/Pops');
  }

  patchPop(pop: Pop) {
    return this.http.patch('http://localhost:3000/Pops/'+pop.id,pop)
  }

  postPop(pop:Pop): Observable<Pop>{
    return this.http.post<Pop>('http://localhost:3000/Pops',pop);
  }

  deletePop(id:number): Observable<Pop>{
    return this.http.delete<Pop>('http://localhost:3000/Pops/'+ id);
  }

  getPopById(id: number): Observable<Pop>{
    return this.http.get<Pop>('http://localhost:3000/Pops/'+ id);
  }


}
