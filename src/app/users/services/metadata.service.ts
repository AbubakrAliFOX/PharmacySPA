import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserMetadata } from '../models/UserMetadata';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${environment.baseUrl}/metadata`;

  getUsersMetadata(): Observable<UserMetadata> {
    return this.http.get<UserMetadata>(this.baseUrl).pipe(
      catchError(this.handleError) // Handle errors here
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage); // Log the error to the console (or send it to a logging service)
    return throwError(() => new Error(errorMessage));
  }
}
