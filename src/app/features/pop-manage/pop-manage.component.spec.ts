import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopManageComponent } from './pop-manage.component';

describe('PopManageComponent', () => {
  let component: PopManageComponent;
  let fixture: ComponentFixture<PopManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
