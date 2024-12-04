import { Component } from '@angular/core';
import { UsersTableComponent } from '../../components/users-table/users-table.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [RouterLink, UsersTableComponent],
  templateUrl: './users-list.page.html',
  styleUrl: './users-list.page.css',
})
export class UsersListPage {
  constructor(private userService: UserService) {}

  users: User[] = [];

  errorMessage: string | null = null;
  loading = true;

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'An error occured';
        console.log(error);
      },
    });
  }
}
