import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[] = [];
    selectedUser: User | null = null;
    private unsubscribe$ = new Subject<void>();

    constructor(private userService: UserService, private messageService: MessageService) {}

    ngOnInit() {
        this.fetchUsers();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    fetchUsers() {
        this.userService.getUsers()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
            next: (data: User[]) => {
                this.users = data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Users Loaded',
                    detail: 'Users have been successfully loaded.'
                });
            },
            error: (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error loading users.'
                });
            }
        });
    }

    onSelectUser(user: User, userId: number) {
        this.selectedUser = user;
    }
}
