import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import {Pop} from "../../core/models/Pop";
import {PopService} from "../../core/service/pop-service/pop.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss']
})
export class PopInfoComponent implements OnInit {
  pop : Pop;
  popId : number;
  popIdSubscription : Subscription;
  popInfoGetSubScription : Subscription;
  constructor(private activatedroute:ActivatedRoute,
              private popService:PopService) { }

  ngOnInit(): void {
    this.popIdSubscription = this.activatedroute.paramMap.subscribe(
      params => {this.popId = Number(params.get('id'))},
      error =>{console.log(error)},
      () => {console.log('Got ID from Route')}
    )
    this.popInfoGetSubScription = this.popService.getPopById(this.popId).subscribe(
      observer => {this.pop = observer},
      error=>{console.log(error)},
      ()=>{console.log('PopInfo GetById: complete')}
    )
  }

}
