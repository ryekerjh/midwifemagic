import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { apiUrl } from '../globals';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    login(email: string, password: string): Observable<boolean> {
        return this.http.post(apiUrl + 'authenticate', JSON.stringify({ username: email, password: password }))
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token }));
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
}