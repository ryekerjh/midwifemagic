import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import './rxjs-extensions';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' ,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Midwifery';
}