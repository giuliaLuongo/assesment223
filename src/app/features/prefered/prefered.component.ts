import { Component, OnInit } from '@angular/core';
import {PreferedService} from "../../core/services/prefered-service/prefered.service";

@Component({
  selector: 'app-prefered',
  templateUrl: './prefered.component.html',
  styleUrls: ['./prefered.component.scss']
})
export class PreferedComponent implements OnInit {

  constructor(private preferedService : PreferedService) { }


  ngOnInit(): void {
  }

}
