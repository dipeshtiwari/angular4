// Modules
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users/create/users.create.component';

export const PageRoutes: Routes = [
    {
        path: 'dashboard',
        component: PageComponent,
        children: [
            { path: '', component: DashboardComponent }
        ]
    },
    {
        path: 'users',
        component: PageComponent,
        children: [
            { path: '', component: UsersComponent }
        ]
    },
    {
        path: 'users/create',
        component: PageComponent,
        children: [
            { path: '', component: UsersCreateComponent }
        ]
    }
];
