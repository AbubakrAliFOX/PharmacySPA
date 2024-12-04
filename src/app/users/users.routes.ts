import { Routes } from '@angular/router';
import { UsersListPage } from './feature/users-list/users-list.page';
import { AddUserPage } from './feature/add-user/add-user.page';
import { ShowUserPage } from './feature/show-user/show-user.page';

export const usersRoutes: Routes = [
  { path: '', component: UsersListPage },
  { path: 'add', component: AddUserPage },
  { path: ':id', component: ShowUserPage },
];
