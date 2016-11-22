import { Injectable, Inject } from '@angular/core';
import { Midwife } from './midwife';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



export class MidwifeService {

  constructor(@Inject(Http) private http: Http) { }

  getMidwives(): Promise<Midwife[]> {
    return this.http.get(this.midwivesUrl)
                .toPromise()
                .then(response => 
                response.json().data as Midwife[])
                .catch(this.handleError);
  }

  getMidwife(id: number): Promise<Midwife>{
    return this.getMidwives()
      .then(midwives => midwives.find(midwife => midwife.id === id));
  }

  private midwivesUrl = 'app/midwives';

  private handleError(error:any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(midwife: Midwife): Promise<Midwife> {
    const url = `${this.midwivesUrl}/${midwife.id}`;
      return this.http
        .put(url, JSON.stringify(midwife), {headers: this.headers})
        .toPromise()
        .then(() => midwife)
        .catch(this.handleError)

  }

  create(name: string): Promise<Midwife> {
    return this.http
      .post(this.midwivesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id:number): Promise<void> {
    const url = `${this.midwivesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }
}

