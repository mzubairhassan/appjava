import { TestBed, inject } from '@angular/core/testing';

import { WarehousedataService } from './warehousedata.service';

describe('WarehousedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarehousedataService]
    });
  });

  it('should be created', inject([WarehousedataService], (service: WarehousedataService) => {
    expect(service).toBeTruthy();
  }));
});
