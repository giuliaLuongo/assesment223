import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Avenger} from "../../core/models/avenger";
import {AvengerService} from "../../core/services/avenger/avenger.service";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  avengers: Avenger[] = [];
  avengersList: Avenger[] = [];
  favorites: Avenger[] = [];
  postAvengers: Subscription = new Subscription;

  constructor(private avengerService: AvengerService, public dialog: MatDialog, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit(): void {
    this.getAllAvengers();
  }

  getAllAvengers() {
    this.avengerService.getAllAvengers().subscribe(observer => {
        this.avengers = [...observer]
      },
      error => {
        console.log(error)
      },
      () => {
        console.log('OK!')
      })
  }

  deleteAvengers(avengers: number) {
    this.postAvengers = this.avengerService.deleteAvengers(avengers).subscribe(
      observer => {
        this.getAllAvengers()
      },
      error => {
        console.log(error)
      },
      () => {
        console.log('tutto bene fratè')
      })
  }


  openDialog(dialog: any, id: number) {
    this.dialog.open(dialog);
    this.avengerService.getAvengersById(id).subscribe(obs => {
      obs.name
    })
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.postAvengers.unsubscribe();
    }
  }
}
