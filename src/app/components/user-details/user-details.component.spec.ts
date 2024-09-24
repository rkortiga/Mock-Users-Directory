import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenubarModule } from 'primeng/menubar';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    const mockActivatedRoute = {
        snapshot: {paramMap: {get: (key: string) => '123'}}
    };

    const mockUserService = {
        getUserById: jasmine.createSpy('getUserById').and.returnValue(of({
            id: 123,
            name: 'John Doe',
            email: 'john@example.com',
            username: 'test',
            address: {
                street: 'test street',
                suite: 'test suite',
                city: 'test city',
                zipcode: 'test zipcode',
                geo: {
                    lat: 'test lat',
                    lng: 'test lng'
                }
            },
            phone: 'test',
            website: 'test',
            company: {
                name: 'test company',
                catchPhrase: 'test catchPhrase',
                bs: 'test bs'
            }
        }))
    };

    const mockMessageService = {
        add: jasmine.createSpy('add')
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                FieldsetModule,
                FloatLabelModule,
                DividerModule,
                BrowserAnimationsModule,
                MenubarModule
            ],
            declarations: [UserDetailsComponent, MenuBarComponent],
            providers: [
                {provide: ActivatedRoute, useValue: mockActivatedRoute},  // Provide mock ActivatedRoute
                {provide: UserService, useValue: mockUserService},  // Mock the UserService
                {provide: MessageService, useValue: mockMessageService}  // Mock the MessageService
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call getUserById with correct ID', () => {
        expect(mockUserService.getUserById).toHaveBeenCalledWith(123);
    });

    it('should set selectedUser on successful getUserById call', () => {
        expect(component.selectedUser()).toEqual({
            id: 123,
            name: 'John Doe',
            email: 'john@example.com',
            username: 'test',
            address: {
                street: 'test street',
                suite: 'test suite',
                city: 'test city',
                zipcode: 'test zipcode',
                geo: {
                    lat: 'test lat',
                    lng: 'test lng'
                }
            },
            phone: 'test',
            website: 'test',
            company: {
                name: 'test company',
                catchPhrase: 'test catchPhrase',
                bs: 'test bs'
            }
        });
    });

    it('should show error message if user not found (404)', () => {
        // Simulate a 404 error
        mockUserService.getUserById.and.returnValue(throwError({status: 404}));

        // Trigger getUserDetails again
        component.getUserDetails();

        expect(mockMessageService.add).toHaveBeenCalledWith({
            severity: 'error',
            summary: 'User Not Found',
            detail: 'Error loading user details.'
        });
    });
});
