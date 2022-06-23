import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pop} from "../../core/models/Pop";
import {PopService} from "../../core/services/popService/pop.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  getPopSubscription : Subscription;

  popList : Pop[]

  constructor(private popService : PopService) { }

  ngOnInit(): void {
    this.getAllPops()
  }

  getAllPops() {
    this.getPopSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error => {console.log(error)},
      () => {console.log("Pops found!")})
  }

  ngOnDestroy(): void {
    this.getPopSubscription.unsubscribe()
  }

}
