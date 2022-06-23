import {Component, Input, OnInit} from '@angular/core';
import {Pop} from "../../core/models/pop";

@Component({
  selector: 'app-favourites-card',
  templateUrl: './favourites-card.component.html',
  styleUrls: ['./favourites-card.component.scss']
})
export class FavouritesCardComponent implements OnInit {

  @Input() pop : Pop

  constructor() { }

  ngOnInit(): void {
  }

}
