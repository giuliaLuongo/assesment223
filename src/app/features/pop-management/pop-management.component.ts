import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopService} from "../../core/services/popService/pop.service";
import {Subscription} from "rxjs";
import {Pop} from "../../core/models/pop";
import {FavouritesService} from "../../core/services/favouritesService/favourites.service";

@Component({
  selector: 'app-pop-management',
  templateUrl: './pop-management.component.html',
  styleUrls: ['./pop-management.component.scss']
})
export class PopManagementComponent implements OnInit, OnDestroy {

  popList : Pop[]
  favouritePopList : Pop[]

  getPopSubscription : Subscription
  deletePopSubscription : Subscription
  getFavouritesSubscription : Subscription
  postToFavouritesSubscription : Subscription
  deleteFromFavouritesSubscription : Subscription
  patchPopSubscription: Subscription

  constructor(private popService : PopService,
              private favouritesService : FavouritesService) { }

  ngOnInit(): void {
    this.getAllPops()
    this.getAllFavourites()
  }

  getAllPops() {
    this.getPopSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error => {console.log("Something went wrong")},
      () => {console.log("Pop list found")}
    )
  }

  deletePop(pop : Pop) {
    this.deletePopSubscription = this.popService.deletePopById(pop.id).subscribe(
      observer => {this.getAllPops()},
      error => {console.log("Something went wrong")},
      () => {console.log("Pop deleted")}
    )
  }

  getAllFavourites() {
    this.getFavouritesSubscription = this.favouritesService.getAllFavourites().subscribe(
      observer => {this.favouritePopList = [...observer]},
      error => {console.log("Something went wrong")},
      () => {console.log("Favourite list found")}
    )
  }


 postPopToFavourites(pop : Pop) {
    this.postToFavouritesSubscription = this.favouritesService.postPopToFavourites(pop).subscribe(
     observer => {this.getAllFavourites()},
     error => {console.log("Something went wrong")},
     () => {console.log("Pop added to favourites")}
    )
   pop.favourite = true
   this.patchPop(pop)
 }

 deletePopfromFavurites(pop : Pop) {
    this.deleteFromFavouritesSubscription = this.favouritesService.deletePopFromFavourites(pop.id).subscribe(
      observer => {this.getAllFavourites()},
      error => {console.log("Something went wrong")},
      () => {console.log("Pop deleted from favourites")}
    )
   pop.favourite = false
   this.patchPop(pop)
 }

 patchPop(pop : Pop) {
    this.patchPopSubscription = this.popService.patchPop(pop).subscribe(
      observer => {this.getAllPops()},
      error => {console.log("Something went wrong")},
      () => {console.log("Pop updated")}
    )
 }

  ngOnDestroy(): void {
    this.getPopSubscription?.unsubscribe()
    this.deletePopSubscription?.unsubscribe()
    this.postToFavouritesSubscription?.unsubscribe()
    this.deleteFromFavouritesSubscription?.unsubscribe()
    this.patchPopSubscription?.unsubscribe()
  }

}
