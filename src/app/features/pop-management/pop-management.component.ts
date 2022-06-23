import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopService} from "../../core/service/pop.service";
import {Pop} from "../../core/models/pop";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-pop-management',
  templateUrl: './pop-management.component.html',
  styleUrls: ['./pop-management.component.scss']
})
export class PopManagementComponent implements OnInit, OnDestroy {

  pops : Pop[];
  pop : Pop;
  getAllPopsSubscription : Subscription;
  deletePopById : Subscription;
  getPatchPopSubscription : Subscription;

  constructor(private popService : PopService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllPops();

  }

  getAllPops(){
    this.getAllPopsSubscription = this.popService.getAllPops().subscribe(
      observer => {this.pops = [...observer]},
      error => {
        console.log(error)}
    )
  }

  makeFavourite(pop : Pop) {
    pop.isFavourite = !pop.isFavourite;
    this.getPatchPopSubscription = this.popService.patchPopById(pop).subscribe(
      observer => {observer = {...pop}
      this.getAllPops()},
      error => {
        console.log(error)}
    )
  }

  deletePop(id: number) {
    this.deletePopById = this.popService.deletePopById(id).subscribe(
      observer => {this.getAllPops()},
      error => {
        console.log(error)
      }
    )
  }


  ngOnDestroy(): void {
    this.getAllPopsSubscription?.unsubscribe();
    this.getPatchPopSubscription?.unsubscribe();
  }
}


