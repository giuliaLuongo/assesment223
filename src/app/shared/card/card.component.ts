import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() id : number
  @Input() nameHero : string
  @Input() ability : string
  @Input() releaseDate : Date
  @Input() power : number
  @Input() img : string



  constructor() { }

  ngOnInit(): void {
  }

}
