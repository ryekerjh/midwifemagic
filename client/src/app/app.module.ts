//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MidwifeModule } from './midwives/midwife.module';
import { ProviderModule } from './provider/provider.module';

//Components
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
//Services
import { MidwifeService } from './midwives/midwife.service';
import { ProviderService } from './provider/provider.service';
import { AuthenticationService } from './services/authentication.service';

//Global Variables
import globals = require('./globals');
import { AppRoutingModule, routedComponents } from './app.routing';


@NgModule({
  imports: [ BrowserModule, 
            FormsModule, 
            HttpModule,
            MidwifeModule,
            ProviderModule,
            AppRoutingModule
  ],
  declarations: [ 
            AppComponent, 
            HeaderComponent, 
            routedComponents
    ],
    providers: [
            MidwifeService,
            ProviderService,
            AuthenticationService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
