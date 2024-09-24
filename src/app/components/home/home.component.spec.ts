import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    const mockActivatedRoute = {
        params: of({id: 123}),
        snapshot: {params: {id: 123}}
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenubarModule],
            declarations: [HomeComponent, MenuBarComponent],
            providers: [{provide: ActivatedRoute, useValue: mockActivatedRoute}]
        })
        .compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
