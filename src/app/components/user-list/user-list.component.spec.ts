import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MenubarModule } from 'primeng/menubar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { TableModule } from 'primeng/table';
import { UserService } from '../../services/user-service/user.service';
import { User } from '../../models/user';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let userService: jasmine.SpyObj<UserService>;
    let mockUsers: User[];

    const mockActivatedRoute = {
        params: of({id: 123}),
        snapshot: {params: {id: 123}}
    };

    beforeEach(async () => {
        mockUsers = [
            {
                id: 1,
                name: 'John Doe',
                username: 'johndoe',
                email: 'john@example.com',
                address: {
                    street: '123 Main St',
                    suite: 'Apt. 1',
                    city: 'Anytown',
                    zipcode: '12345',
                    geo: {lat: '12.345', lng: '67.890'}
                },
                phone: '123-456-7890',
                website: 'johndoe.com',
                company: {
                    name: 'Doe Industries',
                    catchPhrase: 'Innovation through excellence',
                    bs: 'empower synergistic solutions'
                }
            }
        ];

        const spy = jasmine.createSpyObj('UserService', ['getUsers']);

        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MenubarModule,
                TableModule
            ],
            declarations: [UserListComponent, MenuBarComponent],
            providers: [
                HttpClient,
                MessageService,
                {provide: ActivatedRoute, useValue: mockActivatedRoute},
                {provide: UserService, useValue: spy}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;

        userService.getUsers.and.returnValue(of(mockUsers));

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch users on initialization', () => {
        expect(userService.getUsers).toHaveBeenCalled();
        expect(component.users()).toEqual(mockUsers);
    });

    it('should navigate to the user details on user select', () => {
        const navigateSpy = spyOn(component['router'], 'navigate');
        const userId = 1;
        component.onSelectUser(userId);
        expect(navigateSpy).toHaveBeenCalledWith(['/user', userId]);
    });
});
