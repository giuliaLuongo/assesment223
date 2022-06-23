import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pop } from 'src/app/core/models/pop';
import { PopService } from 'src/app/core/services/popService/pop.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  popList: Pop[];
  popSubscription: Subscription;
  favouritePopList: Pop[];

  constructor(private popService: PopService) { }

  ngOnInit(): void {
  }

  getAllFavouritePops(){
    this.popSubscription = this.popService.getAllFavouritePops().subscribe(
      observer => {this.favouritePopList = [...observer]},
      error =>{console.log(error)},
      ()=>{console.log('GetAll: Complete')}
    )
  }

}
