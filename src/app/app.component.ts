import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SuccessService } from './core/services/success.service';
import { ErrorService } from './core/services/error.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private errorService: ErrorService,
    private successService: SuccessService
  ) {}

  ngOnInit(): void {
    this.errorService.errorMessage$.subscribe((message) => {
      this.errorMessage = message;

      if (message) {
        setTimeout(() => {
          this.errorService.clearError();
        }, 5000);
      }
    });

    this.successService.successMessage$.subscribe((message) => {
      this.successMessage = message;

      if (message) {
        setTimeout(() => {
          this.successService.clearSuccess();
        }, 5000);
      }
    });
  }
}
