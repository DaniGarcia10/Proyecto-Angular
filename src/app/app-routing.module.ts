import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
