import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { BrowserModule } from '@angular/platform-browser';
import { ProviderComponent } from './provider.component';
import { ProviderDetailComponent } from './detail/provider-detail.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [  
  { path: 'providers', component: ProviderComponent, canActivate: [AuthGuard] },
  { path: 'provider/detail/:id', component: ProviderDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }

export const routedComponents = [ProviderComponent, ProviderDetailComponent];  