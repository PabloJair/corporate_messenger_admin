import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesComponent } from './utilities.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('UtilitiesComponent', () => {
  let component: UtilitiesComponent;
  let fixture: ComponentFixture<UtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
