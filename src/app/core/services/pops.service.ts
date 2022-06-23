import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pop} from "../../shared/models/pop";

@Injectable({
  providedIn: 'root'
})
export class PopsService {

  constructor(private http : HttpClient) { }

  getAllpops() : Observable<Pop[]>{
    return this.http.get<Pop[]>('http://localhost:3000/Pops');
  }
  deletePop(id : number) : Observable<unknown>{
    return this.http.delete('http://localhost:3000/Pops/'+id)
  }
 getPopById(id: number) : Observable<Pop>{
    return this.http.get<Pop>('http://localhost:3000/Pops/'+id)
 }
 patchAllpops(popsToPatch: Pop[]){
    return this.http.patch('http://localhost:3000/Pops',popsToPatch);
 }



}
