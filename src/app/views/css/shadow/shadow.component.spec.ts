import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowComponent } from './shadow.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {PanelComponent} from '../../../shared/components/panel/panel.component';

describe('ShadowComponent', () => {
  let component: ShadowComponent;
  let fixture: ComponentFixture<ShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowComponent, PanelComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
