import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pop} from "../../core/model/pop";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  @Input() favouritePop : Pop[] | undefined;
  @Output() PopItem : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteFavourite(id: number) {
    this.PopItem.emit(id)
  }
}
