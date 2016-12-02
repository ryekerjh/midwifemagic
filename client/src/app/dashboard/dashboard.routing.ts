import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { DashboardComponent } from './dashboard.component';  

const routes: Routes = [  
   { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
   { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardComponent];  