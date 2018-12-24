import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
