import { Injectable, Inject } from '@angular/core';
import { Provider } from './provider';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class ProviderService {
  constructor(@Inject(Http) private http: Http) { }

   getProviders(): Promise<Provider[]> {
    return this.http.get(this.providersUrl)
                .toPromise()
                .then(response => response.json().data as Provider[])
                .catch(this.handleError);
  } 

  getProvider(id: number): Promise<Provider>{
    return this.getProviders()
      .then(providers => providers.find(provider => provider.id === id));
  }

    private providersUrl = 'app/providers';

    private handleError(error:any): Promise<any>{
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }


}