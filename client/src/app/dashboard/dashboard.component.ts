import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Midwife } from '../midwives/midwife';
import { MidwifeService } from '../midwives/midwife.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  moduleId: 'module.id',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  midwives: Midwife[] = [];
  
  constructor(
    private router: Router,
    private midwifeService: MidwifeService
  ) {  }
  
  ngOnInit(): void {
    this.midwifeService.getMidwives()
      .then(midwives => this.midwives = midwives.slice(1,5));
  }
  gotoDetail(midwife: Midwife):void { 
    let link = ['/detail', midwife.id];
    this.router.navigate(link);
  }
 }