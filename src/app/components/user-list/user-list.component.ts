import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[] = [];
    private unsubscribe$ = new Subject<void>();

    constructor(private userService: UserService) {}

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
}
