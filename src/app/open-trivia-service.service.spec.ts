import { TestBed } from '@angular/core/testing';

import { OpenTriviaServiceService } from './open-trivia-service.service';

describe('OpenTriviaServiceService', () => {
  let service: OpenTriviaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenTriviaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
