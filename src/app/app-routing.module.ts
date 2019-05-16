import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }      from './users/users.component';
import { UserProfileComponent }      from './users/user-details/user-profile/user-profile.component';


const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'users/profile/:id', component: UserProfileComponent },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}