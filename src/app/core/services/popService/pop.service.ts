import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pop} from "../../models/pop";

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor(private http : HttpClient) { }

  getAllPops() : Observable<Pop[]> {
    return this.http.get<Pop[]>("http://localhost:3000/pop")
  }

  getPopById(id : number) : Observable<Pop> {
    return this.http.get<Pop>("http://localhost:3000/pop/" + id)
  }

  deletePopById(id : number) : Observable<Pop> {
    return this.http.delete<Pop>("http://localhost:3000/pop/" + id)
  }

  patchPop(pop : Pop) : Observable<Pop> {
    return this.http.patch<Pop>("http://localhost:3000/pop/" + pop.id, pop)
  }

}
