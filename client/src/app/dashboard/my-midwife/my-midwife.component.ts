import { Component, OnInit} from '@angular/core';
import { Midwife } from '../../midwives/midwife';
import { MidwifeService } from '../../midwives/midwife.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-midwife',
  templateUrl: './my-midwife.component.html',
  styleUrls: ['./my-midwife.component.scss'],
})

export class MyMidwifeComponent implements OnInit {
  midwife: Midwife;
  errorMessage: string;

  
  constructor(
    private midwifeService: MidwifeService
  ) {  }
  
  ngOnInit(): void {
     this.getMyMidwife();
  }

  getMyMidwife():void {
    this.midwifeService.getMyMidwife() 
      .subscribe(
        data => this.midwife = data.midwife,
        error => this.errorMessage = <any>error,
      )
  }
}