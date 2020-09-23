
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {AppRoutes} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {SharedModule} from './shared-view/shared.module';
import {RouterModule} from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { ReportsComponent } from './reports/reports.component';
import {NavigationModule} from './main-layout/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivitiesComponent,
    UsersComponent,
    ProfileComponent,
    ChatComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    NavigationModule,
    AppRoutes,
    RouterModule,

  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
