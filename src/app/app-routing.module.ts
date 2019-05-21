import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }      from './users/users.component';
import { UserProfileComponent }      from './users/user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: AdminDashboardComponent },
//   { path: 'users', component: UsersComponent },
//   { path: 'users/profile/:id', component: UserProfileComponent },
//   ];

const routes: Routes = [
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  { path: 'dashboard', component: AdminDashboardComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}