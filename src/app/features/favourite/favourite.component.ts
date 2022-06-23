import { Component, OnInit } from '@angular/core';
import {Pop} from "../../core/models/Pop";
import {FavouriteService} from "../../core/service/favourite-service/favourite.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  favouriteList: Pop[];
  favouriteGetSubscription : Subscription;
  constructor(private favouriteService: FavouriteService) { }

  ngOnInit(): void {
    this.getAllFavourites()
  }

  getAllFavourites(){
    this.favouriteGetSubscription = this.favouriteService.getAllFavourites().subscribe(
      observer => {this.favouriteList = [...observer]},
      error =>{console.log(error)},
      ()=>{console.log('Favourite GetAll: Complete')}
    )
  }
}
