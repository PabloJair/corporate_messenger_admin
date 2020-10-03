import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionUserModalComponent } from './permission-user-modal.component';

describe('PermissionUserModalComponent', () => {
  let component: PermissionUserModalComponent;
  let fixture: ComponentFixture<PermissionUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionUserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
