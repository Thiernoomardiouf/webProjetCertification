import { TestBed } from '@angular/core/testing';

import { RoleListeService } from './role-liste.service';

describe('RoleListeService', () => {
  let service: RoleListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
