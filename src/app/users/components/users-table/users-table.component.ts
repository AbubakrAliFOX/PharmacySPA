import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-users-table',
  imports: [RouterLink],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css',
})
export class UsersTableComponent {
  @Input() usersList: User[] = [];
  @Input() error: string | null = null;
  @Input() loading: boolean = true;
}
