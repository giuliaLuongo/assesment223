import { Component, Input, OnInit } from '@angular/core';
import { Pop } from 'src/app/core/models/pop';

@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.scss']
})
export class FavouriteCardComponent implements OnInit {

  @Input() pop: Pop;

  constructor() { }

  ngOnInit(): void {
  }

}
