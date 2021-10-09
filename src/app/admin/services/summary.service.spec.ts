import { TestBed } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SummaryService', () => {
  let service: SummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
