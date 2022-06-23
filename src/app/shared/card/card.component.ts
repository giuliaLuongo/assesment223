import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PopService} from "../../core/services/pop-services/pop.service";
import {Pop} from "../../core/models/pop";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() popList: Pop[];
  @Input() id : any;
  @Input() obj : any;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
