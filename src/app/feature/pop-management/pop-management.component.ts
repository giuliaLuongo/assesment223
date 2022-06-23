import { Component, OnInit } from '@angular/core';
import {Pop} from "../../shared/models/pop";
import {PopsService} from "../../core/services/pops.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pop-management',
  templateUrl: './pop-management.component.html',
  styleUrls: ['./pop-management.component.scss']
})
export class PopManagementComponent implements OnInit {

  popList : Pop[] | undefined;
  popSubscription: Subscription | undefined;
  deletePopSubscription: Subscription | undefined;





  constructor(private popService: PopsService) { }

  ngOnInit(): void {
    this.getAllPops()
  }

  private getAllPops() {
    this.popSubscription = this.popService.getAllpops().subscribe(
      observer => {this.popList = [...observer]},
      error => { console.log(error)},
      () => { console.log('Get : complete')})

  }

  deletePop(id: number) {
    this.deletePopSubscription = this.popService.deletePop(id).subscribe(
      observer => {this.getAllPops()},
      error => {console.log('eliminazione andata male')},
      () => {console.log('Delete : tutto apposto')}
    )
  }

  getPopById( id : number) {
    this.deletePopSubscription = this.popService.getPopById(id).subscribe(
      observer => {this.getAllPops()},
      error => {console.log('no such id')},
      () =>{console.log('element found')}
    )
  }



  ngOnDestroy(): void {
    this.popSubscription?.unsubscribe();
    this.deletePopSubscription?.unsubscribe();
  }


  makePopFavTrue(id : number, popToChange : Pop) {
    popToChange = this.getPopById(id) as unknown as Pop
    popToChange.isFav = !popToChange.isFav
  }
}



