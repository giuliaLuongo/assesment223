import { Component, OnInit } from '@angular/core';
import {Pop} from "../../shared/models/Pop";
import {Subscription} from "rxjs";
import {PopService} from "../../core/sevices/pop/pop.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  popList : Pop[] | undefined;
 // favouritePopList : Pop[] | undefined ;
  popSubscription : Subscription | undefined;

  constructor(private popService: PopService) { }

  ngOnInit(): void {
    this.getAllPops()

  //  this.favouritePopList = this.popList?.filter(pop => pop.favourite == true)
  }

  getAllPops(){
    this.popSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error => { console.log(error)},
      () => { console.log('Get : complete')})
  }

  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe()
  }

}
