import { Component, OnInit } from '@angular/core';
import {PopService} from "../../core/services/popService/pop.service";
import {Subscription} from "rxjs";
import {Pop} from "../../core/models/pop";

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {

  constructor(private popService: PopService) { }

  popSubscription: Subscription;
  favSubscription: Subscription;
  popList: Pop[];
  count: number;


  ngOnInit(): void {
    this.getAllpop();
  }

  getAllpop(){
    this.popService.getAllPop().subscribe(observer => {this.popList = [...observer]},
      error => {console.log(error)},
      () => {console.log('OK!')})
  }

  patchPop(pop: Pop) {
    this.favSubscription = this.popService.addFav(pop).subscribe(
      observer => {this.getAllpop()},
      error => {console.log('failed')},
      () => {console.log('ok')})
  }

  addFav(pop : Pop){
    let newPop = {...pop}
    newPop.status = !newPop.status
    this.patchPop(newPop)
  }

  deletePop(index: number){
    this.popSubscription = this.popService.deletePop(index).subscribe(
      observer => {this.getAllpop()},
      error =>{console.log('oh no')},
      ()=>{console.log('tutto bene fratè')}
    )
  }

  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe();
    this.favSubscription?.unsubscribe();
  }
}
