import { Component, OnInit } from '@angular/core';
import {Pop} from "../../core/models/Pop";
import {PopService} from "../../core/services/popService/pop.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-prefered-list',
  templateUrl: './prefered-list.component.html',
  styleUrls: ['./prefered-list.component.scss']
})
export class PreferedListComponent implements OnInit {

  getPopSubscription : Subscription;
  popList: Pop[]

  constructor(private popService : PopService) { }

  ngOnInit(): void {
    this.getAllPops()
  }

  getAllPops() {
    this.getPopSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer].filter(pop => pop.prefered == true)},
      error => {console.log(error)},
      () => {console.log("Pops found!")})
  }


  ngOnDestroy(): void {
    this.getPopSubscription.unsubscribe()
  }

}
