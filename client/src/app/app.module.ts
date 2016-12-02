//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/dashboard.routing';
//Components
import { AppComponent }  from './app.component';
import{ HeaderComponent } from './header/header.component';
import{ MidwifeDetailComponent } from './midwives/details/midwife-detail.component';
import { MidwivesComponent } from './midwives/midwives.component';
import { MidwifeSearchComponent } from './midwives/search/midwife-search.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderDetailComponent } from './provider/detail/provider-detail.component';
//Services
import { MidwifeService } from './midwives/midwife.service';
import { ProviderService } from './provider/provider.service';

//Global Variables
import globals = require('./globals');
import { AppRoutingModule, routingComponents } from './app.routing';


@NgModule({
  imports: [ BrowserModule, 
            FormsModule, 
            HttpModule,
            DashboardModule,
            DashboardRoutingModule,
            AppRoutingModule
  ],
  declarations: [ 
            AppComponent, 
            HeaderComponent, 
            MidwifeDetailComponent,
            MidwivesComponent,
            MidwifeSearchComponent,
            ProviderComponent,
            ProviderDetailComponent,
            routingComponents,
    ],
    providers: [
            MidwifeService,
            ProviderService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
