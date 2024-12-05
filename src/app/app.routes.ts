import {Routes} from '@angular/router';
import {BookingsComponent} from './pages/bookings/bookings.component';
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {EditComponent} from './pages/edit/edit.component';

export const routes: Routes = [
  {path: 'Bookings', component: BookingsComponent},
  {path: 'edit', component: EditComponent},
  {path: 'home', component: HomeComponent},
{path: 'dashboard', component: DashboardComponent},
  {path: 'notfound', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];