import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedListComponent } from './prefered-list.component';

describe('PreferedListComponent', () => {
  let component: PreferedListComponent;
  let fixture: ComponentFixture<PreferedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
