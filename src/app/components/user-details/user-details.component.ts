import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    selectedUser = signal<User | null>(null);

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private messageService: MessageService,
    ) {}

    ngOnInit() {
        this.getUserDetails();
    }

    getUserDetails() {
        const userId = this.route.snapshot.paramMap.get('id');
        if (userId) {
            this.userService.getUserById(+userId).subscribe({
                next: (data: User) => {
                    this.selectedUser.set(data);
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
