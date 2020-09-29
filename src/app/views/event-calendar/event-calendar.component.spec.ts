import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalendarComponent } from './event-calendar.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {CalendarModule} from 'angular-calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('EventCalendarComponent', () => {
  let component: EventCalendarComponent;
  let fixture: ComponentFixture<EventCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCalendarComponent ],
      imports: [MDBBootstrapModulesPro.forRoot(), CalendarModule.forRoot(), BrowserAnimationsModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
