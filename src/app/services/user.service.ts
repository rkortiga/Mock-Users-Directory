import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

  
    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${environment.apiBaseUrl}/users`);
    }

    getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiBaseUrl}/users/${id}`);
    }
}
