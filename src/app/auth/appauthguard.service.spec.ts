import { TestBed } from '@angular/core/testing';

import { AppAuthGuardService } from './appauthguard.service';

describe('AppauthguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppAuthGuardService = TestBed.get(AppAuthGuardService);
    expect(service).toBeTruthy();
  });
});
