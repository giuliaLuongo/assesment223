import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedComponent } from './prefered.component';

describe('PreferedComponent', () => {
  let component: PreferedComponent;
  let fixture: ComponentFixture<PreferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
