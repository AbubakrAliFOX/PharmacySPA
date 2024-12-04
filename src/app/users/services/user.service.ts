import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${environment.baseUrl}/users`;

  // getUser(id: string): Observable<User> {
  //   return this.http.get<User>(`/api/user/${id}`);
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseUrl);
  // }
}
