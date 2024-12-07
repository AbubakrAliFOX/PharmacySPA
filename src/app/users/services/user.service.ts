import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/User';
import { UserExtensive } from '../models/UserExtensive';
import { SuccessService } from '../../core/services/success.service';
import { ErrorService } from '../../core/services/error.service';
import { UserShow } from '../models/UserShow';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private successService: SuccessService,
    private errorService: ErrorService
  ) {}

  private baseUrl = `${environment.baseUrl}/users`;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      tap(() =>
        this.successService.setSuccess('Users retrieved successfully!')
      ),
      catchError((error) => {
        this.errorService.setError('Failed to retrieve users');
        return throwError(() => error); // Re-throw the error for further handling
      })
    );
  }

  getUser(id: Number): Observable<UserShow> {
    return this.http.get<UserShow>(`${this.baseUrl}/${id}`).pipe(
      tap(() => this.successService.setSuccess('User retrieved successfully!')),
      catchError((error) => {
        this.errorService.setError('Failed to retrieve user information');
        return throwError(() => error); // Re-throw the error for further handling
      })
    );
  }

  addUser(user: UserExtensive): Observable<UserExtensive> {
    return this.http
      .post<UserExtensive>(this.baseUrl, user, {
        headers: { 'Cache-Control': 'no-cache' },
      })
      .pipe(
        tap(() => this.successService.setSuccess('User added successfully!')),
        catchError((error) => {
          if (error.status === 409) {
            this.errorService.setError(
              'A user with the same details already exists'
            );
          } else {
            this.errorService.setError('Failed to create user');
          }
          return throwError(() => error); // Re-throw the error for further handling
        })
      );
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, user).pipe(
      tap(() => this.successService.setSuccess('User updated successfully!')),
      catchError((error) => {
        this.errorService.setError('Failed to update user');
        return throwError(() => error); // Re-throw the error for further handling
      })
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => this.successService.setSuccess('User deleted successfully!')),
      catchError((error) => {
        this.errorService.setError('Failed to delete users');
        return throwError(() => error); // Re-throw the error for further handling
      })
    );
  }
}
