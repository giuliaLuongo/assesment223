import {Component, Input, OnInit} from '@angular/core';
import {Pop} from "../../core/models/pop";

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {

  @Input() pop : Pop

  constructor() { }

  ngOnInit(): void {
  }

}
