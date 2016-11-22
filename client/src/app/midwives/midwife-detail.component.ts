import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MidwifeService } from './midwife.service';
import { Midwife } from './midwife';

@Component({
  selector: 'midwife-detail',
  templateUrl: './midwife-detail.component.html',
  styleUrls: ['./midwife-detail.component.css']
})

export class MidwifeDetailComponent implements OnInit {
    midwife: Midwife;

    constructor(
    private midwifeService: MidwifeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.midwifeService.getMidwife(id)
        .then(midwife => this.midwife = midwife);
    })
  }

  goBack(): void {
    this.location.back();
  }

  save():void {
    this.midwifeService.update(this.midwife)
      .then(() => this.goBack());
  }
}