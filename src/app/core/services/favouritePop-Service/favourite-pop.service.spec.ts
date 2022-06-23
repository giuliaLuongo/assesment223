import { TestBed } from '@angular/core/testing';

import { FavouritePopService } from './favourite-pop.service';

describe('FavouritePopService', () => {
  let service: FavouritePopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritePopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
