import { Component } from '@angular/core';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';
import { BackButtonComponent } from '../../../shared/components/back-button/back-button.component';
import { MetadataService } from '../../services/metadata.service';
import { UserMetadata } from '../../models/UserMetadata';
import { UserExtensive } from '../../models/UserExtensive';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  imports: [AddUserFormComponent, BackButtonComponent],
  templateUrl: './add-user.page.html',
  styleUrl: './add-user.page.css',
})
export class AddUserPage {
  constructor(
    private metadataService: MetadataService,
    private userService: UserService
  ) {}

  usersMetadata: UserMetadata | null = null;

  ngOnInit(): void {
    this.metadataService.getUsersMetadata().subscribe({
      next: (data) => {
        this.usersMetadata = data;
        // this.loading = false;
      },
      error: (error) => {
        // this.errorMessage = 'An error occured';
        console.log(error);
      },
    });
  }

  handleFormSubmit(userInfo: UserExtensive): void {
    this.userService.addUser(userInfo).subscribe({
      next: (response) => {
        console.log('User created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating user:', error);
        console.error('Error creating user:', userInfo);
      },
    });
  }
}
