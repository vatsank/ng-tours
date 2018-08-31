import { TestBed, inject } from '@angular/core/testing';

import { TourAPIService } from './tour-api.service';

describe('TourAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourAPIService]
    });
  });

  it('should be created', inject([TourAPIService], (service: TourAPIService) => {
    expect(service).toBeTruthy();
  }));
});
