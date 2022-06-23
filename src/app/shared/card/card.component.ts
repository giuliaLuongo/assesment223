import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name: string
  @Input() powerScore: number
  @Input() ability: string
  @Input() releaseDate: string
  @Input() price: number | undefined
  @Input() rarity: string | undefined
  @Input() totalAppearances: number | undefined
  @Input() isAnAvenger: boolean | undefined
  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
