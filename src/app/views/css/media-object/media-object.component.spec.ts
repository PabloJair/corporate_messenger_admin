import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaObjectComponent } from './media-object.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
describe('MediaObjectComponent', () => {
  let component: MediaObjectComponent;
  let fixture: ComponentFixture<MediaObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaObjectComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
