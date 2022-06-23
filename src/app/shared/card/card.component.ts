import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pop} from "../../core/models/Pop";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  openDet : boolean = false
  pop : Pop
  @Input() popList : Pop[]

  constructor() { }

  ngOnInit(): void {
  }


  openDetails(pop: Pop) {
    this.pop = pop
    this.openDet = true
  }
}
