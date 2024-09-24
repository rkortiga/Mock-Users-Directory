import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;

    login(username: string, password: string): boolean {
        if (username === 'testuser123' && password === 'str0ngp@ssword!') {
            this.isAuthenticated = true;
            return true;
        }
        return false;
    }

    logout() {
        this.isAuthenticated = false;
    }

    getAuthStatus(): boolean {
        return this.isAuthenticated;
    }
}
