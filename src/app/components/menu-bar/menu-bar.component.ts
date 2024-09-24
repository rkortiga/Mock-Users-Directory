import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-home', route: '/home'},
            {label: 'Users', icon: 'pi pi-user', route: '/users'},
            {label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout()}
        ];
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
