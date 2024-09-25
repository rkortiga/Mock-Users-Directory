import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { User } from '../../models/user';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    @ViewChild('dt') dataTable!: Table;
    users = signal<User[]>([]);

    constructor(
        private userService: UserService,
        private messageService: MessageService,
        private router: Router) {}

    ngOnInit() {
        this.fetchUsers();
    }

    fetchUsers() {
        this.userService.getUsers().subscribe({
            next: (data: User[]) => {
                this.users.set(data);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Users Loaded',
                    detail: 'Users have been successfully loaded.'
                });
            },
            error: (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Users Not Found',
                    detail: 'No users were found.'
                });
            }
        });
    }

    onSelectUser(userId: number) {
        this.router.navigate(['/user', userId]);
    }

    setGlobalFilter(event: any) {
        const inputValue = event.target.value;
        this.dataTable.filterGlobal(inputValue, 'contains');
    }
}
