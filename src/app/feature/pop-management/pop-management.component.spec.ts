import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopManagementComponent } from './pop-management.component';

describe('PopManagementComponent', () => {
  let component: PopManagementComponent;
  let fixture: ComponentFixture<PopManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
