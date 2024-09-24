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

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    const mockActivatedRoute = {
        params: of({id: 123}),
        snapshot: {params: {id: 123}}
    };

    beforeEach(async () => {
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
                {provide: ActivatedRoute, useValue: mockActivatedRoute}
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
