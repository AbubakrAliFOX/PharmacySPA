import { Component } from '@angular/core';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';
import { BackButtonComponent } from '../../../shared/components/back-button/back-button.component';
import { MetadataService } from '../../services/metadata.service';
import { UserMetadata } from '../../models/UserMetadata';

@Component({
  selector: 'app-add-user',
  imports: [AddUserFormComponent, BackButtonComponent],
  templateUrl: './add-user.page.html',
  styleUrl: './add-user.page.css',
})
export class AddUserPage {
  constructor(private metadataService: MetadataService) {}

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
}
