import {Component, OnDestroy, OnInit} from '@angular/core';
import {FavouritePopService} from "../../core/services/favouritePop-Service/favourite-pop.service";
import {Pop} from "../../core/models/pop";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit, OnDestroy{

  favouriteList : Pop[];
  favouriteSubscription : Subscription;

  constructor(private favouritePopService : FavouritePopService) { }

  ngOnInit(): void {
    this.favouritePopService.getAllFavouritePops().subscribe(res => {this.favouriteList = res});
  }

  ngOnDestroy(): void {
    this.favouriteSubscription?.unsubscribe()
  }

}
