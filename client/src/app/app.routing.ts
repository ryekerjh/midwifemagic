import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { DashboardComponent } from './dashboard/dashboard.component';  
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '/dashboard', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
