import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { apiUrl } from '../../globals';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from "lodash";



export class ScheduleService {
  constructor(
    @Inject(Http) 
    private http: Http)
     { }
  
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


    // getMidwives(): Observable<Midwife[]> {
    //   return this.http.get(apiUrl + 'midwives')
    //               .map((response: Response) => <Midwife[]>response.json())
    //               // .map(data => {
    //               //     let num = Math.floor((Math.random() * 12) + 1);
    //               //     _.each(data,(midwife) => {
    //               //         midwife.RandomWidth = num
    //               //     })
    //               //     return data;
    //               //   })
    //               .catch(this.handleError);
    //   }
    
    // getMidwife(id: any): Observable<Midwife>{
    //   let params = new URLSearchParams();
    //   params.set('body', id);
    //   return this.http.get(apiUrl + 'midwife/' + id, { search: params })
    //               .map((response: Response) => response.json())
    //               .catch(this.handleError);
    // }

    // createEvent(event: Midwife): Observable<Midwife> {
    //   let headers = new Headers({ 'Content-Type': 'application/json' });
    //   let options = new RequestOptions({ headers: headers });
    //   return this.http.post(apiUrl + 'midwives', { midwife }, options)
    //                   .map((response: Response) => response.json())
    //                   .catch(this.handleError);
    // }

    // getMyMidwife(): Observable<Midwife> {
    //   let id = JSON.parse(localStorage.getItem('currentUser')).userId
    //   let params = new URLSearchParams();
    //   params.set('id', id);
    //   return this.http.get(apiUrl + 'my-midwife', {search: params})
    //     .map((response: Response) => response.json())
    //     .catch(this.handleError);
    // }
}