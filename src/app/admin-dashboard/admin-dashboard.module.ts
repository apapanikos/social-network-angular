import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


//components
import { AdminDashboardComponent } from './admin-dashboard.component';
// import { UsersComponent } from './users.component'
// import { UserComponent } from './user/user.component'
// import { UserDetailsComponent } from './user-details/user-details.component'



//routing
 
@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [
        // UsersComponent,
        // UserComponent,
        // UserDetailsComponent
    ],
    providers: [
    ],
  
})
export class AdminDashboardModule { }