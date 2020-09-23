import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ActivitiesComponent} from './activities/activities.component';
import {UsersComponent} from './users/users.component';
import {ProfileComponent} from './profile/profile.component';
import {ChatComponent} from './chat/chat.component';
import {ReportsComponent} from './reports/reports.component';
import {AuthGuardService} from './services/auth-guard.service';




const routes: Route[] = [
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboards', children:
      [
        {path: 'activadades', component: ActivitiesComponent,canActivate:[AuthGuardService]},
        {path: 'usuarios', component: UsersComponent,canActivate:[AuthGuardService]},
        {path: 'perfil', component: ProfileComponent,canActivate:[AuthGuardService]},
        {path: 'chat', component: ChatComponent,canActivate:[AuthGuardService]},
        {path: 'reportes', component: ReportsComponent,canActivate:[AuthGuardService]},
      ],canActivate:[AuthGuardService]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
