import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserDetailsComponent,
        MenuBarComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DialogModule,
        BrowserAnimationsModule,
        FieldsetModule,
        FloatLabelModule,
        DividerModule,
        IconFieldModule,
        MenubarModule
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
