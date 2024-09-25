import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let mockAuthService: any;
    let mockRouter: any;
    let mockMessageService: any;

    beforeEach(async () => {
        mockAuthService = {
            login: jasmine.createSpy('login').and.returnValue(true)
        };
        mockRouter = {
            navigate: jasmine.createSpy('navigate')
        };
        mockMessageService = {
            add: jasmine.createSpy('add')
        };

        await TestBed.configureTestingModule({
            imports: [
                CardModule,
                HttpClientTestingModule,
                CheckboxModule,
                InputGroupModule,
                FormsModule
            ],
            declarations: [LoginComponent],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: Router, useValue: mockRouter},
                {provide: MessageService, useValue: mockMessageService}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call login and navigate to home on successful login', () => {
        mockAuthService.login.and.returnValue(true);
        component.username = 'testuser';
        component.password = 'testpass';
        component.onLogin();
        expect(mockAuthService.login).toHaveBeenCalledWith('testuser', 'testpass');
        expect(mockMessageService.add).toHaveBeenCalledWith({
            severity: 'success',
            summary: 'Login Successful',
            detail: 'Welcome back!'
        });
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    });

    it('should show error message on failed login', () => {
        mockAuthService.login.and.returnValue(false);
        component.username = 'testuser';
        component.password = 'wrongpass';
        component.onLogin();
        expect(mockAuthService.login).toHaveBeenCalledWith('testuser', 'wrongpass');
        expect(mockMessageService.add).toHaveBeenCalledWith({
            severity: 'error',
            summary: 'Login Failed',
            detail: 'Invalid username or password'
        });
        expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
});
