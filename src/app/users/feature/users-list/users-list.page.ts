import { Component } from '@angular/core';
import { UsersTableComponent } from '../../components/users-table/users-table.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users-list',
  imports: [UsersTableComponent],
  templateUrl: './users-list.page.html',
  styleUrl: './users-list.page.css',
})
export class UsersListPage {
  constructor(private userService: UserService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((data: User[]) => (this.users = data));
  }

  // users: User[] = [];
  // ngOnInit(): void {
  //   this.userService
  //     .getUsers()
  //     .subscribe((data: User[]) => (this.users = data));
  // }
}
