import { TestBed } from '@angular/core/testing';

import { AlertModelService } from './alert-model.service';

describe('AlertModelService', () => {
  let service: AlertModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
