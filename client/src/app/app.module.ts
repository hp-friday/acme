import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {NotificationWarningComponent} from './notifications/notification-warning/notification-warning.component';
import {NotificationErrorComponent} from './notifications/notification-error/notification-error.component';
import {NotificationInfoComponent} from './notifications/notification-info/notification-info.component';
import {NotificationSuccessComponent} from './notifications/notification-success/notification-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    NotificationWarningComponent,
    NotificationErrorComponent,
    NotificationInfoComponent,
    NotificationSuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
