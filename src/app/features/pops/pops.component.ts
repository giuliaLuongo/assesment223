import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopService} from "../../core/services/pop-services/pop.service";
import {Pop} from "../../core/models/pop";
import {Subscription} from "rxjs";
import {FavouritePopService} from "../../core/services/favouritePop-Service/favourite-pop.service";

@Component({
  selector: 'app-pops',
  templateUrl: './pops.component.html',
  styleUrls: ['./pops.component.scss']
})
export class PopsComponent implements OnInit, OnDestroy {

  popList : Pop[];
  favouritesPopList: Pop[];

  popSubscription : Subscription;
  popFavouriteSubscription : Subscription;
  popManageSubscription : Subscription;

  constructor(private popService : PopService, private favouritePopService : FavouritePopService) { }

  ngOnInit(): void {
    this.getAllPops()
    this.getAllFavouritePops()
  }

  getAllPops(){
    this.popSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error => {console.log(error)},
      () => {console.log("Pops loaded")}
    )
  }

  deletePop(id : number){
    this.popManageSubscription = this.popService.deletePop(id).subscribe(
      observer => {this.getAllPops()},
      error => {console.log(error)},
      () => {console.log("Pop deleted")}
    )
  }

  getAllFavouritePops(){
    this.popFavouriteSubscription = this.favouritePopService.getAllFavouritePops().subscribe(
      observer => {this.favouritesPopList = [...observer]},
      error => {console.log(error)},
      () => {console.log("Favourite Pops loaded")}
    )
  }

  addToFavourites(id: number) {
      let pop = this.popList.find((p) => p.id == id) as Pop;
      let popFav = this.favouritesPopList.find((f) => f.id == id) as Pop;
      if(!popFav){
        this.popManageSubscription = this.favouritePopService.postNewPop(pop).subscribe(
          observer => {this.getAllFavouritePops()},
          error => {console.log(error)},
          () => {console.log("Pop added to Favourites")}
        )
        pop.isFavourite = true;
      }else{
        this.popManageSubscription = this.favouritePopService.deleteFavouritePop(id).subscribe(
            observer => {this.getAllFavouritePops()},
          error => {console.log(error)},
          () => {console.log("Pop removed from Favourites")}
        );
        pop.isFavourite = false;
      }
  }

  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe()
    this.popFavouriteSubscription?.unsubscribe()
    this.popManageSubscription?.unsubscribe()
  }


}
