import { TestBed } from '@angular/core/testing';

import { TickerDataService } from './ticker-data.service';

describe('TickerDataService', () => {
  let service: TickerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
