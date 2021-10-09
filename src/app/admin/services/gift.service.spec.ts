import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GiftService } from './gift.service';

describe('GiftService', () => {
  let service: GiftService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
