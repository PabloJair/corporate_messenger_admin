import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InformationUserComponent } from './information-user.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Table2Component', () => {
  let component: InformationUserComponent;
  let fixture: ComponentFixture<InformationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationUserComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
