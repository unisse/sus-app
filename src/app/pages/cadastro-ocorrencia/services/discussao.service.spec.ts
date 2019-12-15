import { TestBed } from '@angular/core/testing';

import { DiscussaoService } from './discussao.service';

describe('DiscussaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscussaoService = TestBed.get(DiscussaoService);
    expect(service).toBeTruthy();
  });
});
