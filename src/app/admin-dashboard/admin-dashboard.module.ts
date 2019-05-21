import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        AdminDashboardComponent
    ],
    providers: [
    ],
    exports: [
        AdminDashboardComponent
      ]
})
export class AdminDashboardModule { }
