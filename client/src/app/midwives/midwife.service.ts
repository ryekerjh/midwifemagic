import { Injectable, Inject } from '@angular/core';
import { Midwife } from './midwife';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { apiUrl } from '../globals';



export class MidwifeService {
  constructor(@Inject(Http) private http: Http) { }
  
  //Define what to do with errors
   private handleError (error: Response | any) {
          // In a real world app, we might use a remote logging infrastructure
          let errMsg: string;
          if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
          } else {
            errMsg = error.message ? error.message : error.toString();
          }
          console.error(errMsg);
          return Observable.throw(errMsg);
        }


    private headers = new Headers({'Content-Type': 'application/json'});
  //Methods:
  getMidwives(): Observable<Midwife[]> {
    return this.http.get(apiUrl + 'midwives')
                .map((response: Response) => <Midwife[]>response.json())
                .catch(this.handleError);
     }
  
  getMidwife(id: number): Observable<Midwife>{
    return this.http.get(apiUrl + 'midwife', id)
                .map((response: Response) => response.json())
                .catch(this.handleError);
  }

  addMidwife(midwife: Midwife): Observable<Midwife> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(apiUrl + 'midwives', { midwife }, options)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }


  update(midwife: Midwife): Promise<Midwife> {
    const url = `${apiUrl}/${midwife._id}`;
      return this.http
        .put(url, JSON.stringify(midwife), {headers: this.headers})
        .toPromise()
        .then(() => midwife)
        .catch(this.handleError)

  }

  // create(midwife: any): Observable<Midwife> {
  //   return this.http
  //     .post(apiUrl + 'midwives', JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  delete(id:number): Promise<void> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }
}

