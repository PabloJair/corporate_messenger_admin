import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CalendarModule, DateAdapter} from 'angular-calendar';

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
import {PermissionUserModalComponent} from './users/permission-user-modal/permission-user-modal.component';
import { SelectedUserEventComponent } from './event-calendar/selected-user/selected-user-event.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddActivityComponent } from './event-calendar/add-activity/add-activity.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
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
    ProfileComponent,
    PermissionUserModalComponent,
    SelectedUserEventComponent,
    AddActivityComponent,



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
    ProfileComponent,
    PermissionUserModalComponent,


  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
