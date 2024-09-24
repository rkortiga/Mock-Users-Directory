import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
