//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Components

import { DashboardComponent } from './dashboard.component';

//Services
import { MidwifeService } from '../midwives/midwife.service';
import { ProviderService } from '../provider/provider.service';

//Global Variables
import globals = require('../globals');

@NgModule({
  imports: [RouterModule, BrowserModule, HttpModule, FormsModule],
  exports: [DashboardComponent, RouterModule, BrowserModule, HttpModule],
  declarations: [DashboardComponent]
})
export class DashboardModule { }  
