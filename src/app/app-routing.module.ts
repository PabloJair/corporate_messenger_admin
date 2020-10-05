import { TestComponent } from './views/test/test/test.component';


import { InformationUserComponent } from './views/users/information/information-user.component';
import { Chart1Component } from './views/charts/chart1/chart1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { LockComponent } from './views/pages/lock/lock.component';


import { EventCalendarComponent } from './views/event-calendar/event-calendar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {AuthGuardService} from './service/auth-guard.service';
import {HomeComponent} from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import {ChatComponent} from './views/chat/chat.component';
import {SelectedUserEventComponent} from './views/event-calendar/selected-user/selected-user-event.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lock', component: LockComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService] },
  { path: 'users', component: InformationUserComponent, canActivate: [AuthGuardService] },
  { path: 'chart1', component: Chart1Component, canActivate: [AuthGuardService] },
  { path: 'user-event/calendar', component: EventCalendarComponent, canActivate: [AuthGuardService] },
  { path: 'user-event', component: SelectedUserEventComponent, canActivate: [AuthGuardService] },

  { path: 'test', component: TestComponent , canActivate: [AuthGuardService]},
  { path: '**', component: NotFoundComponent , canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
