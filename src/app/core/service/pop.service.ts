import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {Pop} from "../models/pop";

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor(private http : HttpClient) { }

  getAllPops() : Observable<Pop[]>{
    return this.http.get<Pop[]>("http://localhost:3000/Pops")
  }

  getPopById(id : number) : Observable<Pop>{
    return this.http.get<Pop>("http://localhost:3000/Pops/" + id)
  }

  deletePopById(id : number) : Observable<number>{
    return this.http.delete<number>("http://localhost:3000/Pops/" + id)
  }

  patchPopById(pop: Pop) : Observable<Pop>{
    return this.http.patch<Pop>("http://localhost:3000/Pops/" + pop.id, pop)
  }
}
