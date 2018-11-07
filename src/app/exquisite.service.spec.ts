import { TestBed } from '@angular/core/testing';

import { ExquisiteService } from './exquisite.service';

describe('ExquisiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExquisiteService = TestBed.get(ExquisiteService);
    expect(service).toBeTruthy();
  });
});
