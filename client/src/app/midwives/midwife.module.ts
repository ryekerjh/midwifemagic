//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MidwifeRoutingModule, routedComponents } from './midwife.routing';


@NgModule({
  imports: [MidwifeRoutingModule, BrowserModule, FormsModule, HttpModule],
  declarations: [routedComponents]
})
export class MidwifeModule { }  