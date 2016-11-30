import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MidwifeService } from '../midwife.service';
import { Midwife } from '../midwife';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'midwife-detail',
  templateUrl: './midwife-detail.component.html',
  styleUrls: ['./midwife-detail.component.scss']
})

export class MidwifeDetailComponent implements OnInit {
    mode = 'Observable';
    midwife: Midwife;
    errorMessage: string;

    constructor(
    private midwifeService: MidwifeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
      // this.getMidwife(this.midwife._id)
  }

  goBack(): void {
    this.location.back();
  }

  save():void {
    this.midwifeService.update(this.midwife)
      .then(() => this.goBack());
  }

  getMidwife(id:number) {
  this.midwifeService.getMidwife(id)
    .subscribe(
        data => this.midwife = data,
        error => this.errorMessage = <any>error,
        () => console.log('data')
    )
  }
}