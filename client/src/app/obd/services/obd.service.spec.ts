import { TestBed, inject } from '@angular/core/testing';

import { ObdService } from './obd.service';

describe('ObdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObdService]
    });
  });

  it('should be created', inject([ObdService], (service: ObdService) => {
    expect(service).toBeTruthy();
  }));
});
