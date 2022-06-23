import { Component, OnInit } from '@angular/core';
import {Pop} from "../../core/models/pop";
import {Subscription} from "rxjs";
import {PopService} from "../../core/service/pop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pop-cards',
  templateUrl: './pop-cards.component.html',
  styleUrls: ['./pop-cards.component.scss']
})
export class PopCardsComponent implements OnInit {

  popFavourite : Pop | undefined;
  pops : Pop[];
  favouritePops : Pop[];
  getAllPopsSubscription : Subscription;
  deletePopById : Subscription;
  getPatchPopSubscription : Subscription;

  constructor(private popService : PopService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllPops();

  }

  getAllPops(){
    this.getAllPopsSubscription = this.popService.getAllPops().subscribe(
      observer => {
        this.pops = [...observer]},
      error => {
        console.log(error)}
    )
  }

  getFavourite(){
    for (let i = 0; i < this.pops.length; i++) {
      this.popFavourite = this.pops.find(el => el.isFavourite)
      if (this.popFavourite?.isFavourite && this.favouritePops.indexOf(this.popFavourite) != -1){
        this.favouritePops = [...this.favouritePops, this.popFavourite]
      }
    }
    console.log(this.favouritePops)
  }

  makeFavourite(pop : Pop) {
    pop.isFavourite = !pop.isFavourite;
    this.getPatchPopSubscription = this.popService.patchPopById(pop).subscribe(
      observer => {observer = {...pop}
        this.getAllPops()},
      error => {
        console.log(error)}
    )
  }

  deletePop(id: number) {
    this.deletePopById = this.popService.deletePopById(id).subscribe(
      observer => {this.getAllPops()},
      error => {
        console.log(error)
      }
    )
  }


  ngOnDestroy(): void {
    this.getAllPopsSubscription?.unsubscribe();
    this.getPatchPopSubscription?.unsubscribe();
  }
}
