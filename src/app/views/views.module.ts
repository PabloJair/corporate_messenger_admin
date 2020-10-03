import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule } from 'angular-calendar';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './main-layout/footer/footer.component';
import { Chart1Component } from './charts/chart1/chart1.component';
import { InformationUserComponent } from './users/information/information-user.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LockComponent } from './pages/lock/lock.component';

import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { TestComponent } from './test/test/test.component';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import { FormatRolPipe } from '../pipes/format-rol.pipe';
import {FormatStatusPipe} from '../pipes/format-status.pipe';
import {ChatComponent} from './chat/chat.component';
import {EditUserModalComponent} from './users/edit-user-modal/edit-user-modal.component';
import {AddUserModalComponent} from './users/add-user-modal/add-user-modal.component';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CalendarModule.forRoot()
  ],
  declarations: [
    FormatStatusPipe,
    FormatRolPipe,
    ChatComponent,
    FooterComponent,
    Chart1Component,
    InformationUserComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    DeleteModalComponent,
    TestComponent,
    EditUserModalComponent,
    AddUserModalComponent,
    EventCalendarComponent,
    ProfileComponent


  ],
  exports: [
    FormatStatusPipe,
    FormatRolPipe,
    FooterComponent,
    Chart1Component,
    InformationUserComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    ProfileComponent

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
