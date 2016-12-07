import { Component, DoCheck } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss' ],
    providers: [AuthenticationService]
    })

    export class HeaderComponent{
        isLoggedIn: Boolean

    constructor(
        private authService: AuthenticationService,
        private router: Router,
        ) {}

    ngDoCheck() {
        let isLoggedIn = localStorage.getItem('currentUser');
        if(isLoggedIn) this.isLoggedIn = true
        else this.isLoggedIn = false
        // console.log('logged in?', this.isLoggedIn)
        }

    logout() {
      this.authService.logout()
      this.router.navigateByUrl('login');
    }

}