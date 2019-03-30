import { TestBed } from '@angular/core/testing';

import { FirebaseReopService } from './firebase-reop.service';

describe('FirebaseReopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseReopService = TestBed.get(FirebaseReopService);
    expect(service).toBeTruthy();
  });
});
