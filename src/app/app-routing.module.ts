import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../../src/app/components/heroes/heroes.component';
import { DashboardComponent } from '../../src/app/components/dashboard/dashboard.component';
import { HeroDetailsComponent } from '../app/components/hero-details/hero-details.component';

const routes = [
  { path: `heroes`, component: HeroesComponent },
  { path: `dashboard`, component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'details/:id', component: HeroDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
