import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import{ HeaderComponent } from './header/header.component';
import{ MidwifeDetailComponent } from './midwives/midwife-detail.component';
import { MidwivesComponent } from './midwives/midwives.component';
import { MidwifeService } from './midwives/midwife.service';
import { MidwifeSearchComponent } from './midwives/midwife-search.component';


//mock api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



@NgModule({
  imports: [ BrowserModule, 
            FormsModule, 
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService),
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
      MidwifeService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}
