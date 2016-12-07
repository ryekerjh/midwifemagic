import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../guards/auth.guard';


const  dashboardRoutes: Routes = [  
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
]
export const DashboardRouter = RouterModule.forChild(dashboardRoutes);