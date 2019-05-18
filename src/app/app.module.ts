import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';
import { UsersModule } from './users/user.module'
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module'

import { AppComponent } from './app.component';
// import { UsersComponent } from './users/users.component';
// import { ApiServiceService } from './services/api-service.service';
// import { UserComponent } from './users/user/user.component';
// import { UserDetailsComponent } from './users/user-details/user-details.component';
// import { UserProfileComponent } from './users/user-details/user-profile/user-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersModule,
    AdminDashboardModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
