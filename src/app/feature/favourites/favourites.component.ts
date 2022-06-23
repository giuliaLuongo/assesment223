import { Component, OnInit } from '@angular/core';
import {Pop} from "../../shared/models/pop";
import {PopsService} from "../../core/services/pops.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  allPops: Pop[] | undefined;

  private popSubscription: Subscription | undefined;
  favList: Pop[] | undefined;



  constructor(private popService: PopsService) {
  }

  ngOnInit(): void {
    this.getAllPops()
    this.favList = this.allPops?.filter( pop => pop.isFav == true) as Pop[];

  }



  private getAllPops() {
    this.popSubscription = this.popService.getAllpops().subscribe(
      observer => {
        this.allPops = [...observer]
      },
      error => {
        console.log('error')
      },
      () => {
        console.log('Get : complete')
      })

  }


  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe()
    }


}
