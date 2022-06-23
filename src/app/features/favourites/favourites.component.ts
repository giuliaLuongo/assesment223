import { Component, OnInit } from '@angular/core';
import {Pop} from "../../core/models/pop";
import {Subscription} from "rxjs";
import {FavouritesService} from "../../core/services/favouritesService/favourites.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouritePopList : Pop[]

  getFavouritesSubscription : Subscription;

  constructor(private favouritesService : FavouritesService) { }

  ngOnInit(): void {
    this.getAllFavourites()
  }

  getAllFavourites() {
    this.getFavouritesSubscription = this.favouritesService.getAllFavourites().subscribe(
      observer => {this.favouritePopList = [...observer]},
      error => {console.log("Something went wrong")},
      () => {console.log("Favourite list found")}
    )
  }

  ngOnDestroy(): void {
    this.getFavouritesSubscription?.unsubscribe()
  }

}
