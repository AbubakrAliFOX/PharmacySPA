import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorMessageSubject = new BehaviorSubject<string | null>(null);
  errorMessage$ = this.errorMessageSubject.asObservable();

  setError(message: string | null) {
    this.errorMessageSubject.next(message);
  }

  clearError() {
    this.errorMessageSubject.next(null);
  }
}
