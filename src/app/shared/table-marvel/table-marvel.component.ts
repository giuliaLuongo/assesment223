import { Component, OnInit } from '@angular/core';
import {Pop} from "../../core/model/pop";
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-table-marvel',
  templateUrl: './table-marvel.component.html',
  styleUrls: ['./table-marvel.component.scss']
})
export class TableMarvelComponent implements OnInit {

  PopList = [
    {
      "id": 1,
      "img": "Pop marvel/spiderman.png",
      "name": "Spiderman",
      "skills": "spara ragnatele",
      "date": 2010,
      "power": 23,
      "alive": "yes",
      "limited edition":"no",
      "bad": "no"

    },
    {
      "id": 2,
      "img": "assets/Pop marvel/venom.png",
      "name": "Venom",
      "skills": "resistenza",
      "date": 12,
      "power": 28,
      "alive": "no",
      "limited edition":"no",
      "bad": "no"
    },
    {
      "id": 3,
      "img": "assets/Pop marvel/hulk.png",
      "name": "Hulk",
      "skills": "super forza",
      "date": 2010,
      "power": 29,
      "alive": "yes",
      "limited edition":"no",
      "bad": "no"
    },
    {
      "id": 4,
      "img": "assets/Pop marvel/thor.png",
      "name": "Thor",
      "skills": "agilità",
      "date": 2017,
      "power": 22,
      "alive": "yes",
      "limited edition":"yes",
      "bad": "no"
    },
    {
      "id": 5,
      "img": "assets/Pop marvel/ironMan.png",
      "name": "Iron Man",
      "skills": "Velocità",
      "date": 2016,
      "power": 25,
      "alive": "yes",
      "limited edition":"no",
      "bad": "yes"
    },
    {
      "id": 6,
      "img": "assets/Pop marvel/doctorstrange.png",
      "name": "Doctor Strange",
      "skills": "Modifica le leggi dello spazio",
      "date": 2021,
      "power": 24,
      "alive": "yes",
      "limited edition":"no",
      "bad": "no"
    },
    {
      "id": 7,
      "img": "",
      "name": "Captain Marvel",
      "skills": "Esperta combattente corpo a corpo",
      "date": 2017,
      "power": 24,
      "alive": "yes",
      "limited edition":"no",
      "bad": "yes"
    },
    {
      "id": 8,
      "img": "assets/Pop marvel/antMan.png",
      "name": "Ant Man",
      "skills": "Rimpicciolimento e ingrandimento",
      "date": 2018,
      "power": 21,
      "alive": "yes",
      "limited edition":"yes",
      "bad": "no"
    },
    {
      "id": 9,
      "img": "assets/Pop marvel/dareDevil.png",
      "name": "Daredevil",
      "skills": "Udito, olfatto e gusto sovrumani",
      "date": 2020,
      "power": 22,
      "alive": "yes",
      "limited edition":"yes",
      "bad": "yes"
    },
    {
      "id": 10,
      "img": "assets/Pop marvel/Thanos.png",
      "name": "Thanos",
      "skills": "intelligenza sovrumane",
      "date": 2019,
      "power": 23,
      "alive": "yes",
      "limited edition":"yes",
      "bad": "no"
    }
  ]

  popList : Pop[] = [];
  private popDeleteSubscription: any;


  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
  }

  addPopFavourite(Pops: Pop) {
 this.popList.push()
  }

  deletePop(id: number): Observable<number>{
    return this.http.delete<number>("http://localhost:4200/Pops/"+ id)
  }


}
