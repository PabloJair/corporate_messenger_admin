import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule } from 'angular-calendar';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { Chart1Component } from './charts/chart1/chart1.component';
import { Chart2Component } from './charts/chart2/chart2.component';
import { Table2Component } from './tables/table2/table2.component';
import { Chart3Component } from './charts/chart3/chart3.component';
import { ModalsComponent } from './modals/modals.component';
import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LockComponent } from './pages/lock/lock.component';

import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { PanelsComponent } from './components/panels/panels.component';
import { ListsComponent } from './components/lists/lists.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TagsComponent } from './components/tags/tags.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PopoversComponent } from './components/popovers/popovers.component';

import { Profile1Component } from './profile/profile1/profile1.component';
import { Profile2Component } from './profile/profile2/profile2.component';
import { Profile3Component } from './profile/profile3/profile3.component';
import { Settings1Component } from './settings/settings1/settings1.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { HelpComponent } from './help/help.component';
import { Settings2Component } from './settings/settings2/settings2.component';
import { Settings3Component } from './settings/settings3/settings3.component';
import { TestComponent } from './test/test/test.component';
import { SectionsComponent } from './sections/sections.component';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyCb44fZMVNTqsA7phK5chbOolMgsJl9mFw'
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    Chart1Component,
    Chart2Component,
    Table2Component,
    Chart3Component,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    DeleteModalComponent,

    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    ButtonsComponent,
    CardsComponent,
    PanelsComponent,
    ListsComponent,
    PaginationComponent,
    ProgressBarsComponent,
    TabsComponent,
    TagsComponent,
    CollapseComponent,
    DatePickerComponent,
    TimePickerComponent,
    TooltipsComponent,
    PopoversComponent,

    Profile1Component,
    Profile2Component,
    Profile3Component,
    Settings1Component,
    EventCalendarComponent,
    HelpComponent,
    Settings2Component,
    Settings3Component,
    TestComponent,
    SectionsComponent
  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    Chart1Component,
    Chart2Component,
    Table2Component,
    Chart3Component,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    ButtonsComponent,
    CardsComponent,
    PanelsComponent,
    ListsComponent,
    PaginationComponent,
    ProgressBarsComponent,
    TabsComponent,
    TagsComponent,
    CollapseComponent,
    DatePickerComponent,
    TimePickerComponent,
    TooltipsComponent,
    PopoversComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
