import { TestBed } from '@angular/core/testing';

import { UnidadeDeSaudeService } from './unidade-de-saude.service';

describe('UnidadeDeSaudeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadeDeSaudeService = TestBed.get(UnidadeDeSaudeService);
    expect(service).toBeTruthy();
  });
});
