import { Component, OnInit } from '@angular/core';
import {Pop} from "../../core/models/pop";
import {Subscription} from "rxjs";
import {PopService} from "../../core/services/popService/pop.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(private popService: PopService) { }

  favSubscription: Subscription;
  favouriteList: Pop[];


  ngOnInit(): void {
    this.getAllFav();
  }

  getAllFav(){
    this.popService.getAllPop().subscribe(observer => {
      this.favouriteList = [...observer]
      },
      error => {console.log(error)},
      () => {console.log('OK!')})
  }

  ngOnDestroy(): void {
    this.favSubscription?.unsubscribe();
  }
}
