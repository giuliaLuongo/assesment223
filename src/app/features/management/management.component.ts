import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pop } from 'src/app/core/models/pop';
import { PopService } from 'src/app/core/services/popService/pop.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  pop: Pop;
  popList: Pop[];
  popSubscription: Subscription;
  postPopSubscription: Subscription;
  favouritePopList: Pop[];
  deletePopSubscription: Subscription;
  postPopOnFavouriteListSubscription: Subscription;
  deletePopOnPopListSubscription: Subscription;
  deletePopOnFavouriteListSubscription: Subscription;

  constructor(private popService: PopService) { }

  ngOnInit(): void {
    this.getAllPops();
    this.getAllFavouritePops();
  }

  getAllPops(){
    this.popSubscription = this.popService.getAllPops().subscribe(
      observer => {this.popList = [...observer]},
      error =>{console.log(error)},
      ()=>{console.log('GetAll: Complete')}
    )
  }

  getPopById(id:number){
    this.popSubscription = this.popService.getPopById(id).subscribe(
      observer => {this.pop = {...observer}},
      error =>{console.log(error)},
      ()=>{console.log('GetById: Complete')}
    )
  }

  getAllFavouritePops(){
    this.popSubscription = this.popService.getAllFavouritePops().subscribe(
      observer => {this.favouritePopList = [...observer]},
      error =>{console.log(error)},
      ()=>{console.log('GetAll: Complete')}
    )
  }

  setFavouritePop(favouritePop: Pop, id: number){
    favouritePop.isFavourite= true;
    this.postPopOnFavouriteListSubscription= this.popService.postPopOnFavouritesList(favouritePop).subscribe(
      observer => {this.getAllFavouritePops()},
      error =>{console.log(error)},
      ()=>{console.log('PostFavouriteOnFavouriteList: Complete')}
    );
  }

  setUnfavouritePop(unfavouritePop: Pop, id: number){
    unfavouritePop.isFavourite= false;
    this.deletePopOnFavouriteListSubscription = this.popService.deletePopOnFavouriteList(id).subscribe(
      observer => {this.getAllFavouritePops()},
      error =>{console.log(error)},
      ()=>{console.log('DeleteFavouriteFromFavouriteList: Complete')}
    );
  }

  deletePop(id: number){
    this.deletePopOnPopListSubscription = this.popService.deletePopOnPopList(id).subscribe(
      observer => {this.getAllPops()},
      error =>{console.log(error)},
      ()=>{console.log('DeletePopFromPopList: Complete')}
    );
  }

  ngOnDestroy(): void{
    this.postPopSubscription?.unsubscribe();
    this.popSubscription?.unsubscribe();
  }
}
