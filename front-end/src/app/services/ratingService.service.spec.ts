/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RatingServiceService } from './ratingService.service';

describe('Service: RatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingServiceService]
    });
  });

  it('should ...', inject([RatingServiceService], (service: RatingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
