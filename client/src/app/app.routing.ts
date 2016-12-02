import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { DashboardComponent } from './dashboard/dashboard.component';  
import { MidwivesComponent } from './midwives/midwives.component';
import { ProviderComponent } from './provider/provider.component';
import { MidwifeDetailComponent } from './midwives/details/midwife-detail.component';
import { ProviderDetailComponent } from './provider/detail/provider-detail.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'midwives', component: MidwivesComponent },
  { path: 'providers', component: ProviderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MidwifeDetailComponent},
  { path: 'provider/detail/:id', component: ProviderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [MidwivesComponent, ProviderComponent];  
