import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { MidwifeSearchService } from './midwife-search.service';
import { Midwife } from '../midwife';

@Component({
  moduleId:'module.id',
  selector: 'midwife-search',
  templateUrl: './midwife-search.component.html',
  styleUrls: [ './midwife-search.component.scss' ],
  providers: [ MidwifeSearchService ]
}) 

export class MidwifeSearchComponent implements OnInit {
  midwives: Observable<Midwife[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private midwifeSearchService: MidwifeSearchService,
    private router: Router) {}

    search(term:string): void {
      this.searchTerms.next(term);
    }

    ngOnInit(): void {
      this.midwives = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term
        ? this.midwifeSearchService.search(term)
        : Observable.of<Midwife[]>([]))
        .catch(error => {
          console.log(error);
          return Observable.of<Midwife[]>([]);
        });
    }

    gotoDetail(midwife:Midwife):void{
      let link = ['/detail', midwife._id];
      this.router.navigate(link);
    }
}