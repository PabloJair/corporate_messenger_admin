import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCardComponent } from './stats-card.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('StatsCardComponent', () => {
  let component: StatsCardComponent;
  let fixture: ComponentFixture<StatsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCardComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
