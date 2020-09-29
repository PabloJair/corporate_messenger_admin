import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipsComponent } from './tooltips.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {PanelComponent} from '../../../shared/components/panel/panel.component';

describe('TooltipsComponent', () => {
  let component: TooltipsComponent;
  let fixture: ComponentFixture<TooltipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipsComponent, PanelComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
