import { Injectable } from '@angular/core';
import {Pop} from "../../models/Pop";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PopService {
  constructor(private http: HttpClient) {}
  getAllPops():Observable<Pop[]>{
    return this.http.get<Pop[]>("http://localhost:3000/pops");
  }
  getPopById(id:number):Observable<Pop>{
    return this.http.get<Pop>("http://localhost:3000/pops/"+ id);
  }
  deletePop(id:number):Observable<Pop>{
    return this.http.delete<Pop>("http://localhost:3000/pops/"+ id)
  }
  patchPop(popToModify:Pop){
    return this.http.patch("http://localhost:3000/pops/"+popToModify.id,popToModify)
  }
}
