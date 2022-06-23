import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Avenger} from "../../core/models/avenger";
import {FavoritesService} from "../../core/services/favorites/favorites.service";
import {Subscription} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  avengers : Avenger[] = [];
  postAvengers : Subscription;

  constructor(private favoriteService : FavoritesService,@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.getAllFavorites();
  }

  getAllFavorites() {
    this.favoriteService?.getAllFavorites().subscribe(observer => {
        this.avengers = [...observer]
      },
      error => {
        console.log(error)
      },
      () => {
        console.log('OK!')
      })
  }

  deleteFavorites(avengers: number) {
    this.postAvengers = this.favoriteService.deleteFavorites(avengers).subscribe(
      observer => {
        this.getAllFavorites()
      },
      error => {
        console.log(error)
      },
      () => {
        console.log('OK!')
      })
  }

  postFavorites(avenger: Avenger,id: number){
    const avengerFav = avenger
    this.postAvengers = this.favoriteService.postFavorites(avenger).subscribe(
      observer => {this.getAllFavorites()},
      error =>{console.log(error)},
      ()=>{console.log('OK!')}
    )
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.postAvengers.unsubscribe();
    }
  }
}
