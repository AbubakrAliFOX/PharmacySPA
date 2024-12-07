import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserShow } from '../../models/UserShow';
import { ActivatedRoute } from '@angular/router';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UserCardSkeletonComponent } from '../../components/user-card-skeleton/user-card-skeleton.component';

@Component({
  selector: 'app-show-user',
  imports: [UserCardComponent, UserCardSkeletonComponent],
  templateUrl: './show-user.page.html',
  styleUrl: './show-user.page.css',
})
export class ShowUserPage {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  userData: UserShow | null = null;

  loading: boolean = true;

  ngOnInit(): void {
    const userId: Number = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUser(userId).subscribe({
      next: (foundUser) => {
        this.userData = foundUser;
        this.loading = false;
      },
    });
  }
}
