import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Settings2Component } from './settings2.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Settings2Component', () => {
  let component: Settings2Component;
  let fixture: ComponentFixture<Settings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Settings2Component ],
      imports: [MDBBootstrapModulesPro.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
