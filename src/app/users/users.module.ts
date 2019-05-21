import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';


//components
import { UsersComponent } from './users.component'
import { UserComponent } from './user/user.component'
import { UserDetailsComponent } from './user-details/user-details.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';



//routing
 
@NgModule({
    imports: [
        RouterModule,
        UsersRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        UsersComponent,
        UserComponent,
        UserDetailsComponent,
        UserProfileComponent
    ],
    providers: [
    ],
    exports: [
        UsersComponent,
        UserComponent,
        UserDetailsComponent,
        UserProfileComponent
    ]
  
})
export class UsersModule { }