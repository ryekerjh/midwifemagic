import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Midwife } from '../midwives/midwife';
import { MidwifeService } from '../midwives/midwife.service';
import {Observable} from 'rxjs/Rx';
import * as _ from "lodash";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  moduleId: 'module.id'
})

export class DashboardComponent implements OnInit {
  midwives: Midwife[];
  errorMessage: string;

  
  constructor(
    private router: Router,
    private midwifeService: MidwifeService
  ) {  }
  
  ngOnInit(): void {
     this.getMidwives();
    }

  getMidwives() {
    this.midwifeService.getMidwives()
    .subscribe(
        data => this.midwives = data,
        error => this.errorMessage = <any>error,
    )
  }

  addMidwife(midwife: Midwife): void {
    this.midwifeService.addMidwife(midwife)
        .subscribe(
            midwife  => this.midwives.push(midwife),
            error =>  this.errorMessage = <any>error);
  }

  gotoDetail(midwife: Midwife):void { 
    let link = ['/detail', midwife._id];
    this.router.navigate(link);
  }

  ngAfterViewChecked() {
    console.log(this.midwives)
  }

 }