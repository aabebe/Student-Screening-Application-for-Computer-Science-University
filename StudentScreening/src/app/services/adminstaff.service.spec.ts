import { TestBed } from '@angular/core/testing';

import { AdminstaffService } from './adminstaff.service';

describe('AdminstaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminstaffService = TestBed.get(AdminstaffService);
    expect(service).toBeTruthy();
  });
});
