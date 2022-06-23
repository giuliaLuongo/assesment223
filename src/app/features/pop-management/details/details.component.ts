import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pop} from "../../../core/models/pop";
import {Subscription} from "rxjs";
import {PopService} from "../../../core/services/popService/pop.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: any
  pop: Pop

  getPopSubscription :Subscription

  constructor(private activatedRoute : ActivatedRoute,
              private popService : PopService) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => { this.id = params.get('id')});
    this.getPopById(this.id)
  }

  getPopById(id : number) {
    this.getPopSubscription = this.popService.getPopById(id).subscribe(
      observer => {this.pop = {...observer}},
      error => {console.log("Something went wrong")},
      () => {console.log("Pop found")}
    )
  }

}
