import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { usersRoutes } from './users/users.routes';

export const routes: Routes = [
  {
    path: 'users',
    children: usersRoutes,
  },
  { path: '**', component: PageNotFoundComponent },
];
