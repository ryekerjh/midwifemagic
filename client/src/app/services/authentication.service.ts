import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { apiUrl } from '../globals';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
    private isLoggedIn: Boolean;
 
    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.isLoggedIn = false;
    }
 
    login(email: string, password: string): Observable<boolean> {
      console.log(email, password);
        return this.http.post(apiUrl + 'authenticate', { email: email, password: password })
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                let userId = response.json() && response.json().user._id;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token, isLoggedIn: true, userId: userId }));
                    return true;
                } else {
                    return false;
                }
            });
    }
 
    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    userLoggedIn(): any {
      console.log(this.token);
      if(this.token !== null) return true;
      else return false;
    }

}