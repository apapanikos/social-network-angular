import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';




@NgModule({
    imports: [
        RouterModule,
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
        UsersComponent
    ]
})
export class UsersModule { }
