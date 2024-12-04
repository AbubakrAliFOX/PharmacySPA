import { Component } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile.component';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'header[app-header]',
  imports: [ProfileComponent, NotificationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
