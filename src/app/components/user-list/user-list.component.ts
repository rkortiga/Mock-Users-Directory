import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[] = [];
    selectedUser: User | null = null;
    displayUserModal = false;
    private unsubscribe$ = new Subject<void>();

    constructor(private userService: UserService, private messageService: MessageService,) {}

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
        .subscribe((data: User[]) => {
            this.users = data;
        });
    }

    viewUser(user: User, userId: number) {
        this.selectedUser = user;
        this.displayUserModal = true;
        this.userService.getUserById(userId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((data: User) => {
            this.selectedUser = data;
            this.displayUserModal = true;
        });
    }
}
