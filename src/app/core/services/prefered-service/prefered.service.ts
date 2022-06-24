import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pop} from "../../models/pop";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PreferedService {

  constructor(private http : HttpClient) { }

  postPopToPrefered(pop : Pop) : Observable<Pop> {
    return this.http.post<Pop>("http://localhost:3000/prefered", pop)
  }

  deletePopFromPrefered(id : number) : Observable<Pop> {
    return this.http.delete<Pop>("http://localhost:3000/prefered/" + id)
  }
}
