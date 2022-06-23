import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMarvelComponent } from './table-marvel.component';

describe('TableMarvelComponent', () => {
  let component: TableMarvelComponent;
  let fixture: ComponentFixture<TableMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
