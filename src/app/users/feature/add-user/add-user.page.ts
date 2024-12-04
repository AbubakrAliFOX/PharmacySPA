import { Component } from '@angular/core';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';
import { BackButtonComponent } from '../../../shared/components/back-button/back-button.component';

@Component({
  selector: 'app-add-user',
  imports: [AddUserFormComponent, BackButtonComponent],
  templateUrl: './add-user.page.html',
  styleUrl: './add-user.page.css',
})
export class AddUserPage {}
