import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuccessService {
  private successMessageSubject = new BehaviorSubject<string | null>(null);
  successMessage$ = this.successMessageSubject.asObservable();

  setSuccess(message: string | null) {
    this.successMessageSubject.next(message);
  }

  clearSuccess() {
    this.successMessageSubject.next(null);
  }
}
