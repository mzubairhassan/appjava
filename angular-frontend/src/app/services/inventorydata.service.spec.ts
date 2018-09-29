import { TestBed, inject } from '@angular/core/testing';

import { InventorydataService } from './inventorydata.service';

describe('InventorydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventorydataService]
    });
  });

  it('should be created', inject([InventorydataService], (service: InventorydataService) => {
    expect(service).toBeTruthy();
  }));
});
