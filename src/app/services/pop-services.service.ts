import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pop} from "../core/model/pop";


@Injectable({
  providedIn: 'root'
})
export class PopServicesService {

  constructor(private http: HttpClient) { }

  getAllPops(): Observable<Pop[]>{
    return this.http.get<Pop[]>('http://localhost:4200/Pops');
}

  deletePop(id: number): Observable<number>{
    return this.http.delete<number>("http://localhost:4200/Pops/"+ id)
  }




}
