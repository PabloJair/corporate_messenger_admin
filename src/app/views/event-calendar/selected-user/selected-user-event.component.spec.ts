import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUserEventComponent } from './selected-user-event.component';

describe('SelectedUserComponent', () => {
  let component: SelectedUserEventComponent;
  let fixture: ComponentFixture<SelectedUserEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedUserEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedUserEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
