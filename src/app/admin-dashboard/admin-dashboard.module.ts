import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersModule } from '../users/users.module';


//components
import { AdminDashboardComponent } from './admin-dashboard.component';

//routing
 
@NgModule({
    imports: [
        RouterModule,
        // UsersModule
    ],
    declarations: [
        AdminDashboardComponent,

    ],
    providers: [
    ],
    exports: [
        AdminDashboardComponent
    ]
  
})
export class AdminDashboardModule { }