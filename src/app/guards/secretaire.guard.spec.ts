import { TestBed } from '@angular/core/testing';

import { SecretaireGuard } from './secretaire.guard';

describe('SecretaireGuard', () => {
  let guard: SecretaireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecretaireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
