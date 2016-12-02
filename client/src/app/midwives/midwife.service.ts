import { Injectable, Inject } from '@angular/core';
import { Midwife } from './midwife';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { apiUrl } from '../globals';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from "lodash";



export class MidwifeService {
  constructor(@Inject(Http) private http: Http) { }
  
  //Define what to do with errors
   private handleError (error: Response | any) {
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
                // .map(data => {
                //     let num = Math.floor((Math.random() * 12) + 1);
                //     _.each(data,(midwife) => {
                //         midwife.RandomWidth = num
                //     })
                //     return data;
                //   })
                .catch(this.handleError);
     }
  
  getMidwife(id: any): Observable<Midwife>{
    let params = new URLSearchParams();
    params.set('body', id);
    return this.http.get(apiUrl + 'midwife/' + id, { search: params })
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


  // update(midwife: Midwife): Promise<Midwife> {
  //   const url = `${apiUrl}/${midwife._id}`;
  //     return this.http
  //       .put(url, JSON.stringify(midwife), {headers: this.headers})
  //       .toPromise()
  //       .then(() => midwife)
  //       .catch(this.handleError)

  // }

  // create(midwife: any): Observable<Midwife> {
  //   return this.http
  //     .post(apiUrl + 'midwives', JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // delete(id:number): Promise<void> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError)
  // }
}

