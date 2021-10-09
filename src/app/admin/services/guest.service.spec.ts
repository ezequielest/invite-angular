import { TestBed } from '@angular/core/testing';

import { GuestService } from './guest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GuestService', () => {
  let service: GuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
