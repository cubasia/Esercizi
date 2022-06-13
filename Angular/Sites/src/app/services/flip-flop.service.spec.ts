import { TestBed } from '@angular/core/testing';

import { FlipFlopService } from './flip-flop.service';

describe('FlipFlopService', () => {
  let service: FlipFlopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipFlopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
