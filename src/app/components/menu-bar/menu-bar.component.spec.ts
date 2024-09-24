import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('MenuBarComponent', () => {
    let component: MenuBarComponent;
    let fixture: ComponentFixture<MenuBarComponent>;

    const mockActivatedRoute = {
        params: of({id: 123}),
        snapshot: {params: {id: 123}}
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MenubarModule
            ],
            declarations: [MenuBarComponent],
            providers: [
                HttpClient,
                {provide: ActivatedRoute, useValue: mockActivatedRoute}
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(MenuBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
