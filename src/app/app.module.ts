import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { ResponseComponent } from './response/response.component';
import { UsersComponent } from './users/users.component';
import { ApiServiceService } from './services/api-service.service';
import { UserComponent } from './users/user/user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserProfileComponent } from './users/user-details/user-profile/user-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
