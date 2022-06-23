import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopService} from "../../../core/services/pop-services/pop.service";
import {Pop} from "../../../core/models/pop";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy{

  id: any;
  obj: Pop;
  popList: Pop[];
  popSubscription : Subscription;

  constructor(private activatedRoute: ActivatedRoute, private popService : PopService) { }

  ngOnInit(): void {
    this.popService.getAllPops().subscribe(res => {this.popList = res});
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    this.obj = this.popList.find(res => this.id == res.id) as Pop;
  }

  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe()
  }

}
