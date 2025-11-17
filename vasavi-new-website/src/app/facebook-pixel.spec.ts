import { TestBed } from '@angular/core/testing';

import { FacebookPixel } from './facebook-pixel';

describe('FacebookPixel', () => {
  let service: FacebookPixel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookPixel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
