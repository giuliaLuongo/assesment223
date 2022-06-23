import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCardsComponent } from './pop-cards.component';

describe('PopCardsComponent', () => {
  let component: PopCardsComponent;
  let fixture: ComponentFixture<PopCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
