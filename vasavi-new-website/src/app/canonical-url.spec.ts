import { TestBed } from '@angular/core/testing';

import { CanonicalUrl } from './canonical-url';

describe('CanonicalUrl', () => {
  let service: CanonicalUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanonicalUrl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
