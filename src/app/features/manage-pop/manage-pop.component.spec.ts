import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePopComponent } from './manage-pop.component';

describe('ManagePopComponent', () => {
  let component: ManagePopComponent;
  let fixture: ComponentFixture<ManagePopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
