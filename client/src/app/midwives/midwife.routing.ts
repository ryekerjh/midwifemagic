import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { BrowserModule } from '@angular/platform-browser';
import { MidwivesComponent } from './midwives.component';  
import { MidwifeDetailComponent } from './details/midwife-detail.component';
import { AuthGuard } from '../guards/auth.guard';


const  midwifeRoutes: Routes = [  
    { path: 'midwives', component: MidwivesComponent, canActivate: [AuthGuard]},
    { path: 'midwife/:id', component: MidwifeDetailComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(midwifeRoutes)],
  exports: [RouterModule]
})
export class MidwifeRoutingModule { }

export const routedComponents = [MidwivesComponent, MidwifeDetailComponent];  