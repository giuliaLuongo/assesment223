import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopService} from "../../core/services/popService/pop.service";
import {Subscription} from "rxjs";
import {Pop} from "../../core/models/pop";

@Component({
  selector: 'app-info-pop',
  templateUrl: './info-pop.component.html',
  styleUrls: ['./info-pop.component.scss']
})
export class InfoPopComponent implements OnInit {

  popSubscription: Subscription;
  popGetSubscription: Subscription;
  pop: Pop;
  popId : number;

  constructor(private activatedRoute: ActivatedRoute,private popService: PopService) { }



  ngOnInit(): void {
    this.popSubscription = this.activatedRoute.paramMap.subscribe(
      par => {this.popId = Number(par.get('id'))},
      error => {console.log(error)},
      () => {console.log('okay')}
    )
    this.popGetSubscription = this.popService.getPopById(this.popId).subscribe(
      obs => {{this.pop = obs}},
      error => {{console.log(error)}},
      () => {{console.log('okay')}}
    )
  }

}
