// Modules
import { Routes, RouterModule } from '@angular/router';

import { PageRoutes } from './page/page.routes';
import { LoginRoutes } from './login/login.routes';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    ...LoginRoutes,
    ...PageRoutes
];

export const Routing = RouterModule.forRoot(appRoutes
    // { enableTracing: true } // <-- debugging purposes only
);
