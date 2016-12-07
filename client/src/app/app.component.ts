import { Component, AfterContentInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import './rxjs-extensions';
import { AuthenticationService } from './services/authentication.service';
import { MidwifeService } from './midwives/midwife.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' ,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  providers: [AuthenticationService, MidwifeService]
})

export class AppComponent {
    title = 'Midwifery';
}