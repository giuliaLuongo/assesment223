import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pop } from 'src/app/core/models/pop';
import { PopService } from 'src/app/core/services/popService/pop.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pop: Pop;
  popSubscription: Subscription;
  param: string;
  id: any;

  constructor(private popService: PopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => { this.id= params.get('id')}
    );
    this.getPopById(this.id);
  }

  getPopById(id:number){
    this.popSubscription = this.popService.getPopById(id).subscribe(
      observer => {this.pop = {...observer}},
      error =>{console.log(error)},
      ()=>{console.log('GetById: Complete')}
    )
  }

}
