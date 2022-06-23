import { TestBed } from '@angular/core/testing';

import { PopServicesService } from './pop-services.service';

describe('PopServicesService', () => {
  let service: PopServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
