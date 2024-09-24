import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string = '';
    password: string = '';
    rememberMe: boolean = false;

    constructor(
        private messageService: MessageService,
        private router: Router,
        private authService: AuthService
    ) {}

    onLogin() {
        if (this.authService.login(this.username, this.password)) {
            this.messageService.add({severity: 'success', summary: 'Login Successful', detail: 'Welcome back!'});
            this.router.navigate(['/home']);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Login Failed',
                detail: 'Invalid username or password'
            });
        }
    }
}
