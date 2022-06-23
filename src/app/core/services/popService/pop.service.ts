import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pop} from "../../models/Pop";
import {Observable} from "rxjs";

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

  updatePop(pop : Pop) : Observable<Pop> {
    return this.http.patch<Pop>("http://localhost:3000/pop/" + pop.id, pop)
  }

  deletePop(id : number) : Observable<Pop> {
    return this.http.delete<Pop>("http://localhost:3000/pop/" + id)
  }

}
