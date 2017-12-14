// Modules
import { Routes, RouterModule } from '@angular/router';

import { userRoutes } from './user/user.routes';

const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    ...userRoutes
];

export const Routing = RouterModule.forRoot(appRoutes
    // { enableTracing: true } // <-- debugging purposes only
);
