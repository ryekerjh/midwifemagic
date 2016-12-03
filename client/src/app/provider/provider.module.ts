//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProviderRoutingModule, routedComponents } from './provider.routing';

@NgModule({
  imports: [ProviderRoutingModule, BrowserModule, HttpModule],
  declarations: [routedComponents]
})
export class ProviderModule { }  