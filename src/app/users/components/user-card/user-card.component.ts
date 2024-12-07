import { Component, Input } from '@angular/core';
import { UserShow } from '../../models/UserShow';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() userData: UserShow | null = null;
}
