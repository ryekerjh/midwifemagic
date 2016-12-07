//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardRouter } from './dashboard.router';

//Components
import { DashboardComponent } from './dashboard.component';
import { MyMidwifeComponent } from './my-midwife/my-midwife.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';

//Services
import { MidwifeService } from '../midwives/midwife.service';
import { ProviderService } from '../provider/provider.service';

//Global Variables
import globals = require('../globals');

@NgModule({
  imports: [HttpModule, FormsModule, DashboardRouter, CommonModule],
  declarations: [DashboardComponent, MyMidwifeComponent, MyScheduleComponent]
})
export class DashboardModule { }  