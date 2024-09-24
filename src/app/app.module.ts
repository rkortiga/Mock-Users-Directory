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
import { CardModule } from 'primeng/card';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Button, ButtonDirective } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserDetailsComponent,
        MenuBarComponent,
        HomeComponent,
        LoginComponent
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
        MenubarModule,
        CardModule,
        FormsModule,
        CheckboxModule,
        Button,
        Ripple,
        ButtonDirective,
        InputTextModule,
        ToastModule
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        MessageService,
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
