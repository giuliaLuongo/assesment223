import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopService} from "../../core/service/pop.service";
import {ActivatedRoute} from "@angular/router";
import {Pop} from "../../core/models/pop";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pop-details',
  templateUrl: './pop-details.component.html',
  styleUrls: ['./pop-details.component.scss']
})
export class PopDetailsComponent implements OnInit,OnDestroy {

  id : number;
  getPopByIdSubscription : Subscription;
  getPopIdSubscription : Subscription;
  pop : Pop;

  constructor(private popService : PopService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getPopIdSubscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'))
    },
      error => {
        console.log(error)})

    this.getPopById(this.id)
  }

  getPopById(id : number){
    this.getPopByIdSubscription = this.popService.getPopById(id).subscribe(
      observer => {this.pop = {...observer}},
      error => {
        console.log(error)}
    )
  }

  ngOnDestroy(): void{
    this.getPopByIdSubscription?.unsubscribe();
    this.getPopIdSubscription?.unsubscribe();
  }
}
