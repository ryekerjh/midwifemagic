import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import './rxjs-extensions';

@Component({
  selector: 'my-app',
  template:  `<h1>{{title}}</h1>
              <nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/midwives" routerLinkActive="active">Midwives</a>
              </nav>
              <router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../public/css/app.component.scss']
})

export class AppComponent {
    title = 'Midwifery';
}