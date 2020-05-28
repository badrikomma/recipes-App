import { TestBed } from '@angular/core/testing';

import { RecpiesService } from './recpies.service';

describe('RecpiesService', () => {
  let service: RecpiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecpiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
