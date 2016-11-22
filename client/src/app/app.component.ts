import { Component } from '@angular/core';
import './rxjs-extensions';

@Component({
  selector: 'my-app',
  template:  `<h1>{{title}}</h1>
              <nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/midwives" routerLinkActive="active">Midwives</a>
              </nav>
              <router-outlet></router-outlet>`,
  styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Midwifery';
}