import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }  from 'rxjs';

import { Midwife } from './midwife';

@Injectable()
export class MidwifeSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Midwife[]>{
    return this.http
    .get(`app/midwives/?name=${term}`)
    .map((r: Response) => r.json().data as Midwife[]);
  }
}