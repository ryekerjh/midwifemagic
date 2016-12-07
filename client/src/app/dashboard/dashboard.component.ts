import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Midwife } from '../midwives/midwife';
import { MidwifeService } from '../midwives/midwife.service';
import { ScheduleService } from './services/schedule.service';
import {Observable} from 'rxjs/Rx';
import * as _ from "lodash";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  providers: [ScheduleService]
})

export class DashboardComponent implements OnInit {
  midwives: Midwife[];
  midwife: Midwife;
  errorMessage: string;

  
  constructor(
    private router: Router,
    private midwifeService: MidwifeService
  ) {  }
  
  ngOnInit(): void {
    }

  getMidwives() {
    this.midwifeService.getMidwives()
    .subscribe(
        data => this.midwives = data.slice(1,5),
        error => this.errorMessage = <any>error,
    )
  }

  addMidwife(midwife: Midwife): void {
    this.midwifeService.addMidwife(midwife)
      .subscribe(
        midwife  => this.midwives.push(midwife),
        error =>  this.errorMessage = <any>error);
  }

  gotoDetail(id: number):void { 
    let link = ['/midwife', id];
    this.router.navigate(link);
  }

  ngAfterViewChecked() {
    console.log(this.midwife);
  }

 }