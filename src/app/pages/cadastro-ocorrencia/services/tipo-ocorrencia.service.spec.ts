import { TestBed } from '@angular/core/testing';

import { TipoOcorrenciaService } from './tipo-ocorrencia.service';

describe('TipoOcorrenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoOcorrenciaService = TestBed.get(TipoOcorrenciaService);
    expect(service).toBeTruthy();
  });
});
