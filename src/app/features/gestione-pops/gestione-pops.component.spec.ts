import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionePopsComponent } from './gestione-pops.component';

describe('GestionePopsComponent', () => {
  let component: GestionePopsComponent;
  let fixture: ComponentFixture<GestionePopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionePopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionePopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
