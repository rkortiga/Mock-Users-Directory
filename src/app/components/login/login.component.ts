import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    username: string = '';
    password: string = '';
    rememberMe: boolean = false;

    // Hardcoded credentials
    private readonly validUsername = 'testuser123';
    private readonly validPassword = 'str0ngp@ssword!';

    constructor(private messageService: MessageService, private router: Router) {}

    onLogin() {
        if (this.username === this.validUsername && this.password === this.validPassword) {
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
