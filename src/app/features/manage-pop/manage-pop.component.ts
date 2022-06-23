import { Component, OnInit } from '@angular/core';
import {Pop} from "../../shared/models/Pop";
import {Subscription} from "rxjs";
import {PopService} from "../../core/sevices/pop/pop.service";

@Component({
  selector: 'app-manage-pop',
  templateUrl: './manage-pop.component.html',
  styleUrls: ['./manage-pop.component.scss']
})
export class ManagePopComponent implements OnInit {

  popList : Pop[] | undefined;
  popSubscription : Subscription | undefined;
  patchPopSubscription : Subscription | undefined;

  constructor(private popService: PopService) { }

  ngOnInit(): void {
    this.getAllPops()
  }

  getAllPops(){
    this.popSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error => { console.log(error)},
      () => { console.log('Get : complete')})
  }

  changeFavoutite(pop: Pop) {
    let fpop = {...pop}
    fpop.favourite = !fpop.favourite
    this.patchPop(fpop)
  }


  patchPop(pop: Pop) {
    this.patchPopSubscription = this.popService.patchPop(pop).subscribe(
      observer => {this.getAllPops()},
      error => {console.log('patch failed')},
      () => {console.log('patch : ok')})
  }


  deletePop(popId: number) {
    this.patchPopSubscription = this.popService.deletePop(popId).subscribe(
      observer => {this.getAllPops()},
      error => {console.log('delete failed')},
      () => {console.log('delete : ok')})
  }

  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe()
  }
}
