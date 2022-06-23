import { Component, OnInit } from '@angular/core';
import {Pop} from "../../shared/models/Pop";
import {PopService} from "../../core/sevices/pop/pop.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-pop',
  templateUrl: './info-pop.component.html',
  styleUrls: ['./info-pop.component.scss']
})
export class InfoPopComponent implements OnInit {

  popSubscription : Subscription | undefined;
  selectedPop: Pop | undefined;
  popid: number
  constructor(private activatedRoute: ActivatedRoute,
              private popService: PopService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      params => {
        this.popid =Number(params.get('id'))
      }
    )
    this.getPopById(this.popid)
  }

  getPopById(popid : number){
    this.popSubscription = this.popService.getPopById(popid).subscribe(
      observer => {this.selectedPop = {...observer}},
      error => { console.log(error)},
      () => { console.log('Get : complete')})
  }



}
