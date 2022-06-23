import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-marvel',
  templateUrl: './card-marvel.component.html',
  styleUrls: ['./card-marvel.component.scss']
})
export class CardMarvelComponent implements OnInit {
  PopList= [
    { "id" : 1,
      "img": "Pop marvel/spiderman.png",
      "name" : "Spiderman",
      "skills" : "spara ragnatele",
      "date" : 23,
      "power" :  23
    },
    { "id" : 2,
      "img": "assets/Pop marvel/venom.png",
      "name" : "Venom",
      "skills" : "resistenza",
      "date" : 12,
      "power" :  28
    },
    { "id" : 3,
      "img": "assets/Pop marvel/hulk.png",
      "name" : "Hulk",
      "skills" : "super forza",
      "date" : 15,
      "power" :  29
    },
    { "id" : 4,
      "img": "assets/Pop marvel/thor.png",
      "name" : "Thor",
      "skills" : "agilità",
      "date" : 23,
      "power" :  22
    },
    { "id" : 5,
      "img" : "assets/Pop marvel/ironMan.png",
      "name" : "Iron Man",
      "skills" : "Velocità",
      "date" : 3,
      "power" :  25
    },
    { "id" : 6,
      "img": "assets/Pop marvel/doctorstrange.png",
      "name" : "Doctor Strange",
      "skills" : "Modifica le leggi dello spazio",
      "date" : 22,
      "power" :  24
    },
    { "id" : 7,
      "img": "",
      "name" : "Captain Marvel",
      "skills" : "Esperta combattente corpo a corpo",
      "date" : 17,
      "power" :  24
    },
    { "id" : 8,
      "img": "assets/Pop marvel/antMan.png",
      "name" : "Ant Man",
      "skills" : "Rimpicciolimento e ingrandimento",
      "date" : 23,
      "power" :  21
    },
    { "id" : 9,
      "img": "assets/Pop marvel/dareDevil.png",
      "name" : "Daredevil",
      "skills" : "Udito, olfatto e gusto sovrumani",
      "date" : 20,
      "power" :  22
    },
    { "id" : 10,
      "img": "assets/Pop marvel/Thanos.png",
      "name" : "Thanos",
      "skills" : "intelligenza sovrumane",
      "date" : 23,
      "power" :  23
    }
    ]


  constructor() { }

  ngOnInit(): void {
  }

  addPopFavourite(pop: {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number} | {skills: string; date: number; img: string; name: string; id: number; power: number}) {

  }
}
