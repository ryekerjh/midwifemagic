//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MidwifeModule } from './midwives/midwife.module';
import { ProviderModule } from './provider/provider.module';
import { DashboardModule } from './dashboard/dashboard.module';

//Components
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

//Services
import { MidwifeService } from './midwives/midwife.service';
import { ProviderService } from './provider/provider.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';

//Global Variables
import globals = require('./globals');
import { AppRoutingModule } from './app.routing';


@NgModule({
  imports: [ BrowserModule, 
            FormsModule, 
            HttpModule,
            MidwifeModule,
            ProviderModule,
            AppRoutingModule,
            DashboardModule
  ],
  declarations: [ 
            AppComponent, 
            HeaderComponent,
            LoginComponent
    ],
    providers: [
            AuthenticationService,
            AuthGuard
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
