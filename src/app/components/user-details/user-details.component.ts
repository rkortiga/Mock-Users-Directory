import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit, OnDestroy {
    selectedUser: User | null = null;
    private unsubscribe$ = new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private messageService: MessageService,
    ) {}

    ngOnInit() {
        this.getUserDetails();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    getUserDetails() {
        const userId = this.route.snapshot.paramMap.get('id');
        if (userId) {
            this.userService.getUserById(+userId).pipe(takeUntil(this.unsubscribe$))
            .subscribe({
                next: (data: User) => {
                    this.selectedUser = data;
                },
                error: (error: any) => {
                    if (error.status === 404) {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'User Not Found',
                            detail: 'Error loading user details.'
                        });
                    }
                }
            });
        }
    }
}
