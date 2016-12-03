import { Injectable, Inject } from '@angular/core';
import { Provider } from './provider';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { apiUrl } from '../globals';


export class ProviderService {
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

   getProviders(): Observable<Provider[]> {
    return this.http.get(apiUrl + 'providers')
        .map((response: Response) => <Provider[]>response.json())
        .catch(this.handleError);
  } 

  getProvider(id:any): Observable<Provider> {
    let params = new URLSearchParams();
    params.set('body', id);
    console.log(params);
    return this.http.get(apiUrl + 'provider/' + id, { search: params })
      .map((response: Response) => <Provider>response.json())
      .catch(this.handleError)
  }

  // getProvider(id: number): Promise<Provider>{
  //   return this.getProviders()
  //     .then(providers => providers.find(provider => provider.id === id));
  // }


}