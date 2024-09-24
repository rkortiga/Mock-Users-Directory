import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    const mockActivatedRoute = {
        params: of({id: 123}),
        snapshot: {params: {id: 123}}
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardModule, HttpClientTestingModule, CheckboxModule, InputGroupModule, FormsModule],
            declarations: [LoginComponent],
            providers: [MessageService, {provide: ActivatedRoute, useValue: mockActivatedRoute}]
        })
        .compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
