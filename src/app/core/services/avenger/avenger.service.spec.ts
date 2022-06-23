import { TestBed } from '@angular/core/testing';

import { AvengerService } from './avenger.service';

describe('AvengerService', () => {
  let service: AvengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
