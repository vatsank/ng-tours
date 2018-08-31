import { TestBed, inject } from '@angular/core/testing';

import { CompAdderService } from './comp-adder.service';

describe('CompAdderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompAdderService]
    });
  });

  it('should be created', inject([CompAdderService], (service: CompAdderService) => {
    expect(service).toBeTruthy();
  }));
});
