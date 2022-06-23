import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pop-card',
  templateUrl: './pop-card.component.html',
  styleUrls: ['./pop-card.component.scss']
})
export class PopCardComponent implements OnInit {
  isShow = false;


  @Input() id: number | undefined
  @Input() img: string | undefined
  @Input() name: string | undefined
  @Input() ability: string | undefined
  @Input() releaseDate: string | undefined
  @Input() power: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
