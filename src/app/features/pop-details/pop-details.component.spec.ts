import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDetailsComponent } from './pop-details.component';

describe('PopDetailsComponent', () => {
  let component: PopDetailsComponent;
  let fixture: ComponentFixture<PopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
