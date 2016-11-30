//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Components
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ HeaderComponent } from './header/header.component';
import{ MidwifeDetailComponent } from './midwives/details/midwife-detail.component';
import { MidwivesComponent } from './midwives/midwives.component';
import { MidwifeSearchComponent } from './midwives/search/midwife-search.component';
//Services
import { MidwifeService } from './midwives/midwife.service';
import { ProviderService } from './provider/provider.service';

//mock api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//Global Variables
import globals = require('./globals');

// import * as _ from "lodash";



@NgModule({
  imports: [ BrowserModule, 
            FormsModule, 
            HttpModule,
            RouterModule.forRoot([
              {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
              },
              {
                path: 'midwives',
                component: MidwivesComponent
              },
              {
                path: 'dashboard',
                component: DashboardComponent
              },
             {
               path: 'detail/:id',
               component: MidwifeDetailComponent
             }
            ]) 
          ],
  declarations: [ 
    AppComponent, 
    HeaderComponent, 
    MidwifeDetailComponent,
    MidwivesComponent,
    DashboardComponent,
    MidwifeSearchComponent
    ],
    providers: [
      MidwifeService,
      ProviderService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}
