import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopsComponent } from './pops.component';

describe('PopsComponent', () => {
  let component: PopsComponent;
  let fixture: ComponentFixture<PopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
