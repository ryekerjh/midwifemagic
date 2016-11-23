import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import './rxjs-extensions';


@Component({
  selector: 'my-app',
  template:  `<header></header>
              <h1>{{title}}</h1>
              <div class="route-nav">
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/midwives" routerLinkActive="active">Midwives</a>
              </div>
              <router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Midwifery';
}