import { TestBed } from '@angular/core/testing';

import { NovoPacienteService } from './novo-paciente.service';

describe('NovoPacienteService', () => {
  let service: NovoPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
