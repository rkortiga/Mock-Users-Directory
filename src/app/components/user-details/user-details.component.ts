import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnChanges {
    @Input() selectedUser: User | null = null;
    displayUserModal = false;

    ngOnChanges() {
        if (this.selectedUser) {
            this.displayUserModal = true;
        }
    }

    closeModal() {
        this.displayUserModal = false;
    }
}
