//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MidwifeRouter } from './midwife.routing';

import { MidwivesComponent } from './midwives.component';
import { MidwifeDetailComponent } from './details/midwife-detail.component';
import { MidwifeSearchComponent } from './search/midwife-search.component';

@NgModule({
  imports: [MidwifeRouter, FormsModule, HttpModule, CommonModule],
  declarations: [MidwivesComponent, MidwifeDetailComponent]
})
export class MidwifeModule { }  