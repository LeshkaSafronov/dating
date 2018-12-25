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
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import {Masonry, MasonryModule} from '@thisissoon/angular-masonry';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: WelcomeComponent
          },
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'registration',
            component: RegistrationComponent
          }]
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      }]
  }
];

const masonryProviders = [
  { provide: Masonry, useFactory: () => window['Masonry'] }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    HomeComponent,
    PeopleComponent,
    MessagesComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    RouterModule.forRoot(routes),
    MasonryModule.forRoot(masonryProviders)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
