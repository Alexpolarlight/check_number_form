import { TestBed } from '@angular/core/testing';

import { ValidateNumService } from './validate-num.service';

describe('ValidateNumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateNumService = TestBed.get(ValidateNumService);
    expect(service).toBeTruthy();
  });
});
