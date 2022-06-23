import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPopComponent } from './details-pop.component';

describe('DetailsPopComponent', () => {
  let component: DetailsPopComponent;
  let fixture: ComponentFixture<DetailsPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
