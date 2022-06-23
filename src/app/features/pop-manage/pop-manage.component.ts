import { Component, OnInit } from '@angular/core';
import {PopService} from "../../core/service/pop-service/pop.service";
import {Subscription} from "rxjs";
import {Pop} from "../../core/models/Pop";
import {FavouriteService} from "../../core/service/favourite-service/favourite.service";

@Component({
  selector: 'app-pop-manage',
  templateUrl: './pop-manage.component.html',
  styleUrls: ['./pop-manage.component.scss']
})
export class PopManageComponent implements OnInit {
  popGetAllSubscription : Subscription;
  popGetSubscription : Subscription;
  popPatchSubscription : Subscription;
  popDeleteSubscription : Subscription;
  favouriteGetSubscription : Subscription;
  favouritePostSubscription : Subscription;
  favouriteDeleteSubscription : Subscription;

  pop : Pop;
  popList : Pop[];
  popFavouriteList : Pop[];

  constructor(private popService : PopService,
              private favouriteService : FavouriteService) { }

  ngOnInit(): void {
    this.getAllPops();
  }
  getAllPops(){
    this.popGetAllSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error =>{console.log(error)},
      ()=>{console.log('Pop GetAll: Complete')}
    )
  }
  getPopById(id:number){
    this.popGetSubscription = this.popService.getPopById(id).subscribe(
      observer => {this.pop = observer},
      error => {console.log(error)},
      ()=>{console.log('Pop GetByID : Complete')}
    )
  }
  removePop(pop:Pop) {
    this.popDeleteSubscription = this.popService.deletePop(pop.id).subscribe(
      observer => {this.getAllPops()},
      error => {console.log(error)},
      () =>{console.log('Order Delete: complete')}
    )
  }
  patchPop(pop:Pop){
    this.popPatchSubscription = this.popService.patchPop(pop).subscribe(
        observer => {this.getAllPops()},
        error => {console.log(error)},
        () => {console.log('Pop Patch: complete')})
    }
  addFavourite(pop:Pop){
    this.favouritePostSubscription = this.favouriteService.addFavourite(pop).subscribe(
      observer => {this.getAllFavourites()},
      error =>{console.log(error)},
      ()=>{console.log('Favourite Add: Complete')}
    )
  }
  getAllFavourites(){
    this.favouriteGetSubscription = this.favouriteService.getAllFavourites().subscribe(
      observer => {this.popFavouriteList = [...observer]},
      error =>{console.log(error)},
      ()=>{console.log('Favourite GetAll: Complete')}
    )
  }
  removeFavourite(pop:Pop) {
    this.favouriteDeleteSubscription = this.favouriteService.deleteFavourite(pop.id).subscribe(
      observer => {this.getAllFavourites()},
      error => {console.log(error)},
      () =>{console.log('Order Delete: complete')}
    )
  }
  addToFavourites(pop:Pop){
    if(!pop.isFavourite) {
      this.changeFavourite(pop);
      this.addFavourite(pop);
    }
    if(pop.isFavourite){
      this.changeFavourite(pop);
      this.removeFavourite(pop);
    }
  }
  changeFavourite(pop: Pop) {
    let favouritePop = {...pop}
    favouritePop.isFavourite = !favouritePop.isFavourite
    this.patchPop(favouritePop)
  }

  ngOnDestroy():void{

    if(this.popGetSubscription){
      this.popGetSubscription.unsubscribe()
    }
    if(this.popPatchSubscription){
      this.popPatchSubscription.unsubscribe()
    }
    if (this.popGetAllSubscription){
      this.popGetAllSubscription.unsubscribe();
    }
    if(this.popDeleteSubscription){
      this.popDeleteSubscription.unsubscribe()
    }
    if (this.favouriteGetSubscription){
      this.favouriteGetSubscription.unsubscribe()
    }
    if (this.favouritePostSubscription){
      this.favouritePostSubscription.unsubscribe()
    }
    if(this.favouriteDeleteSubscription){
      this.favouriteDeleteSubscription.unsubscribe()
    }
  }
}

