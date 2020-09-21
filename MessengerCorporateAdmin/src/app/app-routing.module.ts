import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';




const routes: Route[] = [
  {path: 'login', component: LoginComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
