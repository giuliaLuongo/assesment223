import { Component, OnInit } from '@angular/core';
import {PopService} from "../../core/services/popService/pop.service";
import {observable, Subscription} from "rxjs";
import {Pop} from "../../core/models/Pop";

@Component({
  selector: 'app-gestione-pops',
  templateUrl: './gestione-pops.component.html',
  styleUrls: ['./gestione-pops.component.scss']
})
export class GestionePopsComponent implements OnInit {

  getPopSubscription : Subscription;
  updatePopSubscription : Subscription
  getPopByIdSubscription :Subscription
  deletePopSubscription : Subscription

  popList : Pop[]
  pop : Pop

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


  addToPrefered(pop: Pop) {
    this.pop = pop
    this.pop.prefered = !this.pop.prefered
    this.updatePop()
  }

  removePop(pop: Pop) {
    this.getPopById(pop.id)
    this.deletePop(pop.id)
  }

  deletePop(id :number){
    this.deletePopSubscription = this.popService.deletePop(id).subscribe(
      observer => {this.getAllPops()},
      error => {error},
      () => {"Pop deleted"}
    )
  }

  getPopById(id : number){
    this.getPopByIdSubscription = this.popService.getPopById(id).subscribe(
      observer => {this.pop = observer},
      error => {console.log(error)},
      () => {console.log("Pop found")}
    )
  }

  updatePop() {
    this.updatePopSubscription = this.popService.updatePop(this.pop).subscribe(
      observer => {this.pop = observer},
      error => {console.log(error)},
      () => {console.log("Pop upated")}
    )
  }



  ngOnDestroy(): void {
    this.getPopSubscription.unsubscribe()
    this.updatePopSubscription?.unsubscribe()
    this.getPopByIdSubscription?.unsubscribe()
  }


}
