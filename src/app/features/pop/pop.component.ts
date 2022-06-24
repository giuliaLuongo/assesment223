import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopService} from "../../core/services/pop-service/pop.service";
import {Subscription} from "rxjs";
import {Pop} from "../../core/models/pop";
import {PreferedService} from "../../core/services/prefered-service/prefered.service";

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit, OnDestroy {

  popList : Pop[];
  popSubscription : Subscription
  deletePopSubscription : Subscription
  postPopToPreferedSubscription: Subscription;

  constructor(private popService : PopService, private preferedService : PreferedService) { }

  ngOnInit(): void {
    this.getAllPops()
  }

  getAllPops() {
    this.popSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error => {console.log("Errore")},
      () => {console.log("Pop list trovata")}
    )
  }

  deletePop(pop : Pop) {
    this.deletePopSubscription = this.popService.deletePopById(pop.id).subscribe(
      observer => {this.getAllPops()},
      error => {console.log("Errore")},
      () => {console.log("Pop eliminata")}
    )
  }

  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe()
    this.deletePopSubscription?.unsubscribe()
  }
}
