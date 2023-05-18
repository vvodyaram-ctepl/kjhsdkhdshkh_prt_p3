import { TestBed } from '@angular/core/testing';

import { DatatableService } from './reports-datatable.service';

describe('DatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatatableService = TestBed.get(DatatableService);
    expect(service).toBeTruthy();
  });
});
